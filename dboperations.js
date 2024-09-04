const dbConfig = require('./config');
const sql = require('mssql');

async function insertUsers(user){
    try{
        let pool = await sql.connect(dbConfig);
        let insertUser = await pool.request()
        .input('FirstName', sql.VarChar, user.FirstName)
        .input('LastName', sql.VarChar, user.LastName)
        .input('Email', sql.VarChar, user.Email)
        .input('Password', sql.VarChar, user.Password)
        .input('CPassword', sql.VarChar, user.CPassword)
        .execute('insert_users');
        return insertUser.recordsets;
    }
    catch(error){
        console.log("Error occured while inserting data to DB: " + error);
    }
}

module.exports = { insertUsers : insertUsers};