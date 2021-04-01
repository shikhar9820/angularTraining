var app = angular.module('StudentRecord', ['ui.router']);
function studentDetailsObject(fName, lName, rollNo, phoneNo) {
    this.fName = fName;
    this.lName = lName;
    this.rollNo = rollNo;
    this.phoneNo = phoneNo;
}
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'index.html'
    });
    $stateProvider
    .state('insert',{
        url:'/insert',
        templateUrl:'insert.html'
    });
    $stateProvider
    .state('search',{
        templateUrl:'search.html'
    });

    $stateProvider
    .state('delete',{
        url:'/delete',
        templateUrl:'delete.html'
    });

})

var record = new Array();
app.controller('mainCtrl', function ($scope) {
    //this.searchRoll = "123,345667774,12322";
    console.log(record);
    console.log($scope.entry);
    $scope.addEntry = function () {
        //record.push($scope.newData);
        var obj = new studentDetailsObject($scope.fName, $scope.lName, $scope.rollNo, $scope.phoneNo);
        record.push(obj);
        console.log(record);
    }
    console.log(this.searchRoll.split(","));
    // console.log()
    app.filter('search', function () {
        return function (input) {
            for (let i = 0; i < RollNo.length; i++) {
                for (let j = 0; j < record.length; j++) {
                    if (record[j].rollNo == RollNo[i]) {
                        return input;
                    }
                }
            }
        }
    })

    $scope.delete = function () {
        if (record.length == $scope.deleteRoll.split(",").length) {
            alert("do you want to delete the whole dataBase")
        }
        //delete logic
        /*if yes{
            var del = $scope.deleteRoll.split(",");
            for (let i = 0; i < del.length; i++) {
                var index = record.findIndex(del[i]);
                record.splice(index, 1);
            }
    }*/
        //   console.log(record);
    }
    $scope.record = record;
})