const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Ari',
    password: 'abc123',
    database: 'moviepurwadhika',
    port: '3306',
    // timezone: 'UTC'
})

module.exports = {
    sqlDB : db
}