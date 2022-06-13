package repository

import "time"

type User struct {
	ID        int64     `db:"id"`
	Username  string    `db:"username"`
	Email     string    `db:"email"`
	Password  string    `db:"password"`
	Role      string    `db:"role"`
	CreatedAt time.Time `db:"created_at"`
	Token     string    `db:""token`
}

type Creation struct {
	ID        int64     `db:"id"`
	UserID    int64     `db:"user_id"`
	Subject   string    `db:"subject"`
	Content   string    `db:"content"`
	category  string    `db:"category"`
	Status    string    `db:"status"`
	CreatedAt time.Time `db:"created_at"`
}
