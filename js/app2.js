// global variables

let employees = [];
const urlAPI = 'https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US';
const gridContainer = document.querySelector('.grid-container');
const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');


//let randomData;

fetch(urlAPI)
    .then(response => response.json())
            //console log to see results
            //.then(response => console.log(response))
            //.then(response => console.log(response.results))
   //.then(response => randomData = response.results)
   .then(response => response.results)


   .then(getRandomData)
  // .then(displayEmployees)
        //from study review
        //.then(displayEmployees)
        // .catch(err => console.log(err))
            //.then(() => console.log(randomData))
            //these get the single line of info needed
            //.then(response => console.log(response.results[0].name.first))
            //.then(response => console.log(response.results[0].email))
            //.then(response => console.log(response.results[0].location.city))



//function to populate employee array??
function getRandomData(randomData){
    for (prop in randomData) {
        employees.push(randomData[prop]);
    }   
    console.log(employees);       
}
// employees.forEach((employee, index) => {
//     let name = employee.name;
//     let email = employee.email;
//     let city = employee.location.city;
//     let picuture = employee.picture;
// });

    
   
    
// function displayEmployees(employeeData) {
//     employees = employeeData;
    
//     //let employeeHTML = '';

//     employees.forEach((employee, index) => {
//         let name = employee.name;
//         let email = employee.email;
//         let city = employee.location.city;
//         let picture = employee.picture;

//         // employeeHTML += ​`
//         //         <div class="card" data-index="${index}">
//         //             <img class="avatar" src="${picture.large}" />
//         //             <div class="text-container">
//         //                 <h2 class="name">${name.first} ${name.last}</h2>
//         //                 <p class="email">${email}</p>
//         //                 <p class="address">${city}</p>
//         //             </div>
//         //         </div>
//         //         `
//     });

// }

// //console.log(employees);


//NOTES =========================================================================
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

// console.log(employees);







// convert oL to arr
//     var arr = [];
// for (prop in objectLiteral) {
//   arr.push(objectLiteral[prop]);
// }

//var arr = $.map(objectLiteral, function (value) { return value; });


