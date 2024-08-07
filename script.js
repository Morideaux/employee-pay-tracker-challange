// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = []
let employeeFirstNameList = []
let employeeLastNameList = []
let employeeSalaryList =[]

class employee {
    constructor(firstName, lastName, salary){
             employeeFirstNameList = firstName;
             employeeLastNameList = lastName;
             employeeSalaryList = salary
        };  
      }
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [employeeFirstNameList, employeeLastNameList, employeeSalaryList];

addEmployeesBtn.addEventListener("click", function (createEmployee) {
  while (true) {
        function createEmployee()  {
        let firstName = prompt("enter first name:");
        employeeFirstNameList.push(firstName);
        then)
           let lastName = prompt(`now enter ${firstName}'s last name`) ;
            employeeLastNameList.push(lastNameName); 
          )
        then(
           var salary = prompt(`${firstName} ${lastName}'s salary:`);
            employeeSalaryList.push(salary));
    };
    stop = prompt("enter another employee? (Y for yes, N to stop)", ES);
    (stop.toUppercase() != "N");
 };
});
  return employeesArray
};


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = null

  sumOfSalary => () {
  for (let i =0; i < employeeSalaryList.length; i++) {
    sum += employeeSalaryList[i];
  };
  return sum
 };

const averageSalary = (sum/employeeSalaryList.length)

console.log(`The average employee salary between our ${employeesArray.length} is ${averageSalary}`)


};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
var randomIndex = math.floor(math.random() * employeesArray.length)
var randomEmployeeId = employeesArray.splice(randomIndex, 1)[0]
console.log(`whooo! looks like ${randomEmployeeId} has won the lottery`)

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);