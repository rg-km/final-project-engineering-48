package api

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type User struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type LoginSuccessResponse struct {
	Message string `json:"message"`
	Token   string `json:"token"`
	Role    string `json:"role"`
}

type Register struct {
	Username string `json:"username"`
	Email    string `json:"email"`
}

type RegisterSuccessResponse struct {
	Message string   `json:"message"`
	Data    Register `json:"data"`
}

type AuthErrorResponse struct {
	Error string `json:"error"`
}

// Jwt key untuk membuat signature
var jwtKey = []byte("key")

type CLaims struct {
	ID       int64
	Username string
	Role     string
	jwt.StandardClaims
}

func (api *API) register(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	encoder := json.NewEncoder(w)
	err = api.usersRepo.InsertUser(user.Username, user.Email, user.Password)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	register := Register{
		Username: user.Username,
		Email:    user.Email,
	}

	registerResponse := RegisterSuccessResponse{
		Message: "register success",
		Data:    register,
	}

	json.NewEncoder(w).Encode(registerResponse)
}

func (api *API) login(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := api.usersRepo.Login(user.Username, user.Password)

	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	userRole, _ := api.usersRepo.FetchUserRole(*res)
	userId, _ := api.usersRepo.FetchUserID(*res)

	expirationTime := time.Now().Add(60 * time.Minute)

	claims := &CLaims{
		ID:       *userId,
		Username: *res,
		Role:     *userRole,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
		Path:    "/",
	})

	loginResponse := LoginSuccessResponse{
		Message: "login success",
		Token:   tokenString,
		Role:    *userRole,
	}

	json.NewEncoder(w).Encode(loginResponse)
}

func (api *API) logout(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)

	token, err := req.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// return unauthorized ketika token kosong
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// return bad request ketika field token tidak ada
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	if token.Value == "" {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	c := http.Cookie{
		Name:   "token",
		MaxAge: -1,
	}
	http.SetCookie(w, &c)

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("logged out"))
}
