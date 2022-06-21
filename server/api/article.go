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
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

type CategorySuccessResponse struct {
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

type ArticleResponse struct {
	Message string  `json:"message"`
	Data    Article `json:"data"`
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

func (api *API) publishArticle(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var article Article
	err := json.NewDecoder(r.Body).Decode(&article)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userID := r.Context().Value("id").(int64)

	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	err = api.articlesRepo.InsertIntoPublish(userID, article.Subject, article.Content, article.Category)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	articleResponse := ArticleResponse{
		Message: "success publish article",
		Data:    article,
	}

	encoder.Encode(articleResponse)
}

func (api *API) arsipArticle(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	var article Article
	err := json.NewDecoder(r.Body).Decode(&article)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	userID := r.Context().Value("id").(int64)

	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	err = api.articlesRepo.InsertIntoArsip(userID, article.Subject, article.Content, article.Category)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	articleResponse := ArticleResponse{
		Message: "success arsip article",
		Data:    article,
	}

	encoder.Encode(articleResponse)
}

func (api *API) getArticle(w http.ResponseWriter, r *http.Request) {
	api.AllowOrigin(w, r)
	article, err := api.articlesRepo.FetchArticle()
	encoder := json.NewEncoder(w)
	w.Header().Set("Content-Type", "application/json")
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ArticleErrorResponse{Error: err.Error()})
		}
	}()
	articleResponse := ArticleSuccessResponse{
		Message: "success",
		Data:    article,
	}

	encoder.Encode(articleResponse)
}
