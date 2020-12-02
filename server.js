var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "employeeTracker_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
  });

function start() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: ['View all employees', 'View all departments', 'View all roles', 
            'Add new employee', 'Add new department', 'Add new role', 'Update employee roles']
        })
}