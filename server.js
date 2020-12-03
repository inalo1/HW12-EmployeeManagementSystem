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
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'add new employee', 
                'view all employees', 
                'update employee roles',
                'add new department', 
                'view all departments', 
                'add new role', 
                'view all roles'
            ]
        })
        .then(function(answer) {
            switch (answer.choice) {
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

// function addNewEmployee() {}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}

// function addNewDepartment() {}
// function viewAllDepartments() {}
// function addNewRole() {}
// function viewAllRoles() {}






