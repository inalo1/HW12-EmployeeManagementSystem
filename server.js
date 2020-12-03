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
                'view all employees', 
                'add new employee', 
                'update employee roles',
                'view all departments', 
                'add a new department', 
                'view all roles',
                'add a new role', 
            ]
        })
        .then(function(answer) {
            switch (answer.choice) {
                case 'view all employees':
                    viewAllEmployees();
                    break;
                case 'add a new employee':
                    addNewEmployee();
                    break;
                case 'update employee roles':
                    updateEmployeeRoles();
                    break;
                case 'view all departments':
                    viewAllDepartments();
                    break;
                case 'add a new department':
                    addNewDepartment();
                    break;
                case 'view all roles':
                    viewAllRoles();
                    break;
                case 'add a new role':
                    addNewRole();
                    break;

                default: 
                    connection.end();
                    break;
            }
        });
}

// function addNewEmployee() {}
function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function(err, data) {
        if (err) throw err;
        console.table(data);
        connection.end();
    });
}

// function addNewDepartment() {}
function viewAllDepartments() {
    connection.query("SELECT * FROM department", function(err, data) {
        if (err) throw err;
        console.table(data);
        connection.end();
    });
}
// function addNewRole() {}
function viewAllRoles() {
    connection.query("SELECT * FROM role", function(err, data) {
        if (err) throw err;
        console.table(data);
        connection.end();
    });
}






