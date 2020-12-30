const mysql = require('mysql');

// setup mySQL database connection
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eventPlanning'
  });

module.exports = db