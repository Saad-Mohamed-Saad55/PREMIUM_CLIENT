const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "college_platform",
  port: 3306

//   host: "bc9hbqejea54mm4jisb2-mysql.services.clever-cloud.com",
//   user: "ueowj6fgqzxsok7q",
//   password: "ELreF73VjN4m4pDrVnBQ",
//   database: "bc9hbqejea54mm4jisb2",
});
conn.connect(function (err){
    if(err) throw err;
    console.log("Connected To Database :)");
});

module.exports = conn;