package repository

import (
	"database/sql"
	"errors"
	"strings"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUsername(username string) (User, error) {
	var sqlStmt string
	var user User

	// query untuk mengambil data username user berdasarkan username
	sqlStmt = `SELECT username FROM users WHERE username = ?`

	row := u.db.QueryRow(sqlStmt, username)
	err := row.Scan(&user.Username)

	return user, err
}

func (u *UserRepository) FetchEmail(email string) (User, error) {
	var sqlStmt string
	var user User

	// query untuk mengambil data email user berdasarkan email
	sqlStmt = `SELECT email FROM users WHERE email = ?`

	row := u.db.QueryRow(sqlStmt, email)
	err := row.Scan(&user.Email)

	return user, err
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var sqlStmt string
	var users []User

	// query untuk mengambil data user
	sqlStmt = `SELECT id, username, email, password, role FROM users`

	rows, err := u.db.Query(sqlStmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var user User
	for rows.Next() {
		err := rows.Scan(
			&user.ID,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
		)

		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func (u *UserRepository) InsertUser(username string, email string, password string) error {
	var sqlStmt string

	// check panjang username dan password
	if len(username) < 6 || len(username) > 12 {
		return errors.New("Username must be 6-12 characters")
	} else if len(password) < 6 || len(password) > 12 {
		return errors.New("Password must be 6-12 characters")
	}

	// check already exist username
	user, _ := u.FetchUsername(username)
	if user.Username != "" {
		return errors.New("Username already exists")
	}

	user, _ = u.FetchEmail(email)
	// check already email
	if user.Email != "" {
		return errors.New("Email already exists")
	}

	// check password contains space
	checkPassword := strings.Contains(password, " ")
	if checkPassword {
		return errors.New("Password must not contain space")
	}

	// set default untuk kolom role, loggedin
	defaultRole := "user"
	// hash password
	hashPassword, _ := HashPassword(password)

	// query untuk insert data user
	sqlStmt = `INSERT INTO users (username, email, password, role, created_at) VALUES (?, ?, ?, ?, ?)`

	_, err := u.db.Exec(sqlStmt, username, email, hashPassword, defaultRole, time.Now())
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) Login(username string, password string) (*string, error) {
	var sqlStmt string

	// query untuk mengambil data user berdasarkan username dan password
	sqlStmt = `SELECT id, username, email, password, role FROM users WHERE username = ?`

	row := u.db.QueryRow(sqlStmt, username)

	var user User
	err := row.Scan(
		&user.ID,
		&user.Username,
		&user.Email,
		&user.Password,
		&user.Role,
	)

	if err != nil {
		return nil, errors.New("Login Failed")
	}

	// check password
	hashedPassword := []byte(user.Password)
	pass := []byte(password)
	passwordHash := bcrypt.CompareHashAndPassword(hashedPassword, pass)
	if passwordHash == nil {
		return &user.Username, nil
	}

	return nil, errors.New("Invalid Username or Password")

}

func (u *UserRepository) FetchUserRole(username string) (*string, error) {
	var sqlStmt string
	var role string

	// query untuk mengambil role user berdasarkan username
	sqlStmt = `SELECT role FROM users WHERE username = ?`

	row := u.db.QueryRow(sqlStmt, username)
	err := row.Scan(&role)

	return &role, err
}

func (u *UserRepository) FetchUserID(username string) (*int64, error) {
	var sqlStmt string
	var id int64

	// query untuk mengambil id user berdasarkan username
	sqlStmt = `SELECT id FROM users WHERE username = ?`

	row := u.db.QueryRow(sqlStmt, username)
	err := row.Scan(&id)

	return &id, err
}
