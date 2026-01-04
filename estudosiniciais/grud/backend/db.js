import mysql from "mysql";

export const db = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "DDtankmsp1@",
    database: "crud",
    }
);