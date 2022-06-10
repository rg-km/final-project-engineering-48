package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
	"github.com/rg-km/final-project-engineering-48/server/api"
	"github.com/rg-km/final-project-engineering-48/server/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "./tulisaja-app.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)

	mainAPI := api.NewAPI(*usersRepo)
	mainAPI.Start()
}
