// global variables

let employees = [];
const urlAPI = 'https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US';
const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');


// //this works


fetch(urlAPI)
    .then(response => response.json())
    
    //console log to see results
    //.then(response => console.log(response))
    .then(data => console.log(data.results))

    //.then(response => response.results)

    //from study review
    //.then(displayEmployees)
    // .catch(err => console.log(err))
    
// function displayEmployees(employeeData) {
//     employees = employeeData;
    
//     //employeeHTML = '';

//     employees.forEach((employee, index) => {
//         let name = employee.name;
//         let email = employee.email;
//         let city = employee.location.city;
//         let picture = employee.picture;
//     });

// }
