package api

import (
	"encoding/json"
	"net/http"
)

type ArticleErrorResponse struct {
	Error string `json:"error"`
}

type Article struct {
	Subject  string `json:"subject"`
	Content  string `json:"content"`
	Category string `json:"category"`
}

type CategorySuccessResponse struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

type ArticleSuccessResponse struct {
	Articles []Article `json:"Articles"`
}

func (api *API) getArticleCategory(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	category, err := api.articlesRepo.FetchArticleCategory()
	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ArticleErrorResponse{Error: err.Error()})
		}
	}()
	categoryResponse := CategorySuccessResponse{
		Message: "success",
		Data:    category,
	}

	encoder.Encode(categoryResponse)
}
