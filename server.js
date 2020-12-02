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
            choices: [
                'Add new employee', 
                'View all employees', 
                'Add new department', 
                'View all departments', 
                'Add new role', 
                'View all roles', 
                'Update employee roles'
            ]
        })
        .then(function(answer) {
            switch (answer.list) {
                case 'add a new employee':
                    addNewEmployee();
                    break;
                case 'view all employees':
                    viewAllEmployees();
                    break;
                case 'add a new department':
                    addNewDepartment();
                    break;
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'add a new roles':
                    addNewRole();
                    break;
                case 'view all roles':
                    viewAllRoles();
                    break;
                case 'Update employee roles':
                    updateEmployeeRoles();
                    break;

                default: 
                    connection.end();
                    break;
            }
        });
}














