-- Create an SQL Query which retrieves the id, name and surname of all registered users under country Malta
SELECT id, name, surname FROM users
WHERE country = 'MT';

-- Create an SQL Query which retrieves the id, name, surname of all registered users that are NOT registered under country Portugal and France
SELECT id, name, surname FROM users
WHERE country NOT IN ('PT', 'FR');

-- Create an SQL Query which retrieves the id, name and surname of all registered users which are still active
SELECT users.id, name, surname FROM users
JOIN users_creds ON users.id = users_creds.id

-- Create an SQL Query which retrieves the name, surname and emails of all registered users which requires a reset password.
SELECT name, surname, email FROM users
JOIN users_creds ON users.id = users_creds.id
WHERE required_reset_password = 1;
