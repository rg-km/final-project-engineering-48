package repository

import (
	"database/sql"
	"errors"
	"time"
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

func (u *ArticleRepository) FetchArticle() ([]Creation, error) {
	var sqlStmt string
	var creations []Creation

	// query untuk mengambil category article
	sqlStmt = `SELECT u.id, u.username, c.id, c.subject, c.category
	FROM users u
	LEFT JOIN creations c ON u.id = c.user_id WHERE c.status = "publish"`

	rows, err := u.db.Query(sqlStmt)
	if err != nil {
		return nil, errors.New("Error fetching article")
	}
	defer rows.Close()

	var creation Creation
	for rows.Next() {
		err := rows.Scan(
			&creation.ID,
			&creation.UserUsername,
			&creation.UserID,
			&creation.Subject,
			&creation.category,
		)

		if err != nil {
			return nil, err
		}

		creations = append(creations, creation)
	}

	return creations, nil
}

func (u *ArticleRepository) InsertIntoPublish(user_id int64, subject, content, category string) error {
	var sqlStmt string
	status := "publish"

	// query untuk memasukkan data article ke tabel
	sqlStmt = `INSERT INTO creations (user_id, subject, content, category, status, created_at) VALUES (?, ?, ?, ?, ?, ?)`

	_, err := u.db.Exec(sqlStmt, user_id, subject, content, category, status, time.Now())
	if err != nil {
		return err
	}

	return nil
}

func (u *ArticleRepository) InsertIntoArsip(user_id int64, subject, content, category string) error {
	var sqlStmt string
	status := "arsip"

	// query untuk memasukkan data article ke tabel
	sqlStmt = `INSERT INTO creations (user_id, subject, content, category, status, created_at) VALUES (?, ?, ?, ?, ?, ?)`

	_, err := u.db.Exec(sqlStmt, user_id, subject, content, category, status, time.Now())
	if err != nil {
		return err
	}

	return nil
}
