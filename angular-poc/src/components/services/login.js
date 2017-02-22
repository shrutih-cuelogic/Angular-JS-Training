// angular.module('login.service', [])
//     .service('loginService', ['$http', loginService]);


// // function employeeService() {

// //     var service = {};
// //     var employee_arr = [];

// //     function set(username, password, confirm_password, email) {
// //         employee_arr.push([username, password, confirm_password, email]);
// //         console.log(employee_arr);
// //         return employee_arr;
// //     };

// //     function employee() {
// //         return [{
// //             'id': 1,
// //             'email': 'pranay.dubey@cuelogic.co.in',
// //             'password': 'pranay',
// //             'emp_name': 'Pranay',
// //             'address' : 'KP road,Pune'
// //         }, {
// //             'id': 2,
// //             'email': 'shruti.hiremath@cuelogic.co.in',
// //             'password': 'shruti',
// //             'emp_name': 'Shruti',
// //             'address' : 'Sinhgad road,Pune'
// //         }, {
// //             'id': 3,
// //             'email': 'shweta.hiremath49@gmail.com',
// //             'password': 'shweta49',
// //             'emp_name': 'Shweta',
// //             'address' : 'Aundh road,Pune'
// //         }, {
// //             'id': 4,
// //             'email': 'richa.dagar@gmail.com',
// //             'password': 'richa',
// //             'emp_name': 'Richa',
// //             'address' : 'Paud road,Pune'
// //         }, {
// //             'id': 5,
// //             'email': 'pratibha.mishra49@gmail.com',
// //             'password': 'pratibha',
// //             'emp_name': 'Pratibha',
// //             'address' : 'Wakad road,Pune'
// //         }]
// //     }

// //     function deleteEmployee(ind) {
// //         employee.splice(ind, 1);
// //     }
    
// //     service.set = set;
// //     service.employee = employee;
// //     return service;
// // }

// function loginService() {

//     var service = {};

//     function login(email, password) {
        
//         return $q(function(resolve, reject) {
//             valid = false;
//             var emp_credentials = homeService.getEmp();
//             for (var i = 0; i < emp_credentials.length; i++) {
//                 if (emp_credentials[i]['email'] == email && emp_credentials[i]['password'] == password) {
//                     valid = true;
//                     break;
//                 }
//             }
//             if (valid) {
//                 console.log(emp_credentials[i]);
//                 resolve(emp_credentials[i]);
//             } else {

//                 reject(false);
//             }
//         });
//     }

//     service.login = login;
//     return service;
// };
