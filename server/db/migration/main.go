package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "../../tulisaja-app.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		password VARCHAR(255) NOT NULL,
		role VARCHAR(255) NOT NULL,
		created_at DATETIME NOT NULL
	);
		
	CREATE TABLE IF NOT EXISTS creations (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER NOT NULL,
		subject VARCHAR(255) NOT NULL,
		content TEXT NOT NULL,
		category "enum('Science','Horror','Teknologi','Fiksi')" NOT NULL,
		status VARCHAR(255) NOT NULL,
		created_at DATETIME NOT NULL,
		FOREIGN KEY (user_id) REFERENCES users(id)
	);`)

	if err != nil {
		panic(err)
	}
}
