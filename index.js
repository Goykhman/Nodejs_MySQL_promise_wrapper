/*

  Test the MySQL query wrapper in dbQuery.

  Tests if the table "customers" is present in the database.
  If not, creates that table, with id (key), name, and address.
  Then inserts an entry into the table.
  Then reads the entire table.

*/

const dbQuery = require('./dbQuery').dbQuery

// Test query # 1
let sqlFind = 'SHOW TABLES LIKE "customers"'

dbQuery(sqlFind)

.then((sqlFindResult) => {
    console.log("sqlFindResult = ")
    console.log(sqlFindResult)
    if(sqlFindResult.length == 0){
        // Test query # 2
        let sqlCreate = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))'
        return dbQuery(sqlCreate)
    } else {
        return new Promise((resolve, reject) => {
            resolve()
        })
    }
})

.then((sqlCreateResult) => {
    if(sqlCreateResult){
        console.log("sqlCreateResult = ")
        console.log(sqlCreateResult)
    }
    // Test query # 3
    let sqlInsert = 'INSERT INTO customers (name, address) VALUES ("Jack", "Forest Hill")'
    return dbQuery(sqlInsert)
})

.then((sqlInsertResult) => {
    console.log("sqlInsertResult = ")
    console.log(sqlInsertResult)
    // Test query # 4
    let sqlRead = 'SELECT * FROM customers'
    return dbQuery(sqlRead)
})

.then((sqlReadResult) => {
    console.log("sqlReadResult = ")
    console.log(sqlReadResult[sqlReadResult.length-1])
    process.exit()
})

.catch(function(error) {
    console.log(error)
})
