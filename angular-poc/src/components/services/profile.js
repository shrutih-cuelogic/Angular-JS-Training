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
        'address': 'KP road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, {
        'id': 2,
        'username': 'shruti.hiremath',
        'password': 'shruti',
        'firstname': 'shruti',
        'lastname': 'Hiremath',
        'gender': 'female',
        'address': 'Sinhgad road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, {
        'id': 3,
        'username': 'shweta.hiremath',
        'password': 'shweta49',
        'firstname': 'Shweta',
        'lastname': 'Hiremath',
        'gender': 'female',
        'address': 'Aundh road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, {
        'id': 4,
        'username': 'tushar.mate',
        'password': 'tushar',
        'firstname': 'Tushar',
        'lastname': 'Mate',
        'gender': 'male',
        'address': 'Paud road,Pune',
        'emp_img': "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
    }, ]

    function getEmp() {
        return employee_records;
    }

    // function deleteProfile(index) {
    //     for (var i = 0; i < employee_records.length; i++) {
    //         employee_records.splice(employee_records.indexOf(employee_records[i]), 1);
    //         break;
    //         }
    //     }
    //     return employee_records;
    // }

    service.getEmp = getEmp;
    // service.deleteProfile = deleteProfile;
    return service
};
