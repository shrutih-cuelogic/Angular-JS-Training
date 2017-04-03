angular.module('profile.service', [])
    .service('profileService', ['$rootScope', '$location', profileService]);

function profileService($rootScope, $location) {

    var service = {};
    var employee_records = [{
        'id': 1,
        'username': 'deepali.bavi',
        'firstname': 'Deepali',
        'lastname': 'Bavi',
        'password': 'deepali',
        'gender': 'female',
        'address': 'KP road,Pune'
    }, {
        'id': 2,
        'username': 'shruti.hiremath',
        'password': 'shruti',
        'firstname': 'shruti',
        'lastname': 'Hiremath',
        'gender': 'female',
        'address': 'Sinhgad road,Pune'
    }, {
        'id': 3,
        'username': 'shweta.hiremath',
        'password': 'shweta49',
        'firstname': 'Shweta',
        'lastname': 'Hiremath',
        'gender': 'female',
        'address': 'Aundh road,Pune'
    }, {
        'id': 4,
        'username': 'tushar.mate',
        'password': 'tushar',
        'firstname': 'Tushar',
        'lastname': 'Mate',
        'gender': 'male',
        'address': 'Paud road,Pune'
    }, ]

    function getEmp() {
        return employee_records;
    }

    // function deleteEmployee(username) {
    //     for (var i = 0; i < employee_records.length; i++) {
    //         if (employee_records[i]["username"] == username) {
    //             employee_records.splice(employee_records.indexOf(employee_records[i]), 1);
    //             break;
    //         }
    //     }
    //     return employee_records;
    // }

    // function addEmployee(id, name, username, address) {
    //     var new_employee = {};
    //     flag = 0;
    //     for (var i = 0; i < employee_records.length; i++) {
    //         if (employee_records[i].id == id) {
    //             flag = 1;
    //             break;
    //         }
    //     }
    //     if (flag == 0) {
    //         new_employee.id = parseInt(id);
    //         new_employee.gender = name;
    //         new_employee.username = username;
    //         new_employee.address = address;
    //         employee_records.push(new_employee);
    //     } else {
    //         alert("This id already exists..!!!")
    //     }
    // }

    service.getEmp = getEmp;
    // service.deleteEmployee = deleteEmployee;
    // service.addEmployee = addEmployee;
    return service
};
