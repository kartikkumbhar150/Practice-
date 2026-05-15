import mysql from "mysql2/promise"

export const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "kartik123",
    database : "auth_system"
});