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

type ArticleSuccessResponse struct {
	Articles []Article `json:"Articles"`
}

func (api *API) getArticleCategory(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	category, err := api.articlesRepo.FetchArticleCategory()
	encoder := json.NewEncoder(w)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ArticleErrorResponse{Error: err.Error()})
		}
	}()

	encoder.Encode(category)
}
