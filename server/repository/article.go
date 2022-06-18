package repository

import (
	"database/sql"
	"errors"
)

type ArticleRepository struct {
	db *sql.DB
}

func NewArticleRepository(db *sql.DB) *ArticleRepository {
	return &ArticleRepository{db: db}
}

func (p *ArticleRepository) FetcharticleByID(id int64) (Creation, error) {
	var sqlStmt string
	var article Creation

	// query untuk mengambil data article berdasarkan id
	sqlStmt = `SELECT id, user_id, subject, content, category FROM creations WHERE id = ?`

	row := p.db.QueryRow(sqlStmt, id)
	err := row.Scan(
		&article.ID,
		&article.UserID,
		&article.Subject,
		&article.Content,
		&article.category,
	)
	if err != nil {
		return article, err
	}

	return article, nil
}

func (u *ArticleRepository) FetchArticleCategory() ([]string, error) {
	var sqlStmt string
	categories := []string{}

	// query untuk mengambil category article
	sqlStmt = `SELECT DISTINCT category FROM creations`

	rows, err := u.db.Query(sqlStmt)
	if err != nil {
		return nil, errors.New("Error fetching article category")
	}
	defer rows.Close()

	var creation Creation
	for rows.Next() {
		err := rows.Scan(
			&creation.category,
		)

		if err != nil {
			return nil, err
		}

		categories = append(categories, creation.category)
	}

	return categories, nil
}
