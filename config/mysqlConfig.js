var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "DB.ntnxlab.local",
   user: "root",
   password: "nutanix/4u",
   database: "uptick"
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
