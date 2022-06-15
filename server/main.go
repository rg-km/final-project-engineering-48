package main

import (
	"database/sql"
	"server/api"
	"server/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./tulisaja-app.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	articlesRepo := repository.NewArticleRepository(db)

	mainAPI := api.NewAPI(*usersRepo, *articlesRepo)
	mainAPI.Start()
}
