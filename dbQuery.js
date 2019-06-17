/*

  Promise wrappper for MySQL queries.

*/

const db = require('./db').db

let dbQuery = function(queryString) {
    return db().then((connection) => {
        return new Promise((resolve, reject) => {
            connection.query(queryString, (error, result) => {
                if (error) reject(error)
                else {
                    connection.release()
                    resolve(result)
                }
            })
        })
    })
}

exports.dbQuery = dbQuery
