/*

  Promise wrappper for MySQL connection to the given database.

*/

const mysql = require('mysql')

let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database : 'test'
})

let db = function() {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(error, connection) {
            if (error) reject(error)
            else resolve(connection)
        })
    })
}

exports.db = db
