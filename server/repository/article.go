package repository

import (
	"database/sql"
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

func (u *ArticleRepository) FetchArticleCategory() (*string, error) {
	var sqlStmt string
	var category string

	// query untuk mengambil category article
	sqlStmt = `SELECT category FROM creations`

	row := u.db.QueryRow(sqlStmt)
	err := row.Scan(&category)

	return &category, err
}
