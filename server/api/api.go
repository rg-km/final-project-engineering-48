package api

import (
	"final-project/repository"
	"fmt"
	"net/http"
)

type API struct {
	usersRepo     repository.UserRepository
	creationsRepo repository.CreationsRepository
	mux           *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, creationsRepo repository.CreationsRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, creationsRepo, mux,
	}

	// Handler untuk users
	mux.Handle("/api/register", api.POST(http.HandlerFunc(api.register)))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
