var app = angular.module('StudentRecord', ['ui.router']);
function studentDetailsObject(fName, lName, rollNo, phoneNo) {
    this.fName = fName;
    this.lName = lName;
    this.rollNo = rollNo;
    this.phoneNo = phoneNo;
}
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app.html',
            controller: "mainCtrl"
        })
        .state('insert', {
            url: '/insert',
            templateUrl: '../insert/insert.html',
            controller: "mainCtrl"
        })
        .state('search', {
            url: '/search',
            templateUrl: '../search/search.html',
            controller: "mainCtrl"
        })
        .state('delete', {
            url: '/delete',
            templateUrl: '../delete/delete.html',
            controller: "mainCtrl"
        });


    $urlRouterProvider.otherwise('/');



})

var record = new Array();
app.controller('mainCtrl', function ($scope) {
    //var searchvar=this.searchRoll = "123,345667774,12322";
    var vm = this;
    $scope.searchRoll = "Enter The Value";
    $scope.deleteRoll = "Enter the Values"
    console.log(record);
    
    $scope.addEntry = function () {
        var obj = new studentDetailsObject($scope.fName, $scope.lName, $scope.rollNo, $scope.phoneNo);
        record.push(obj);
        console.log(record);
    }

    $scope.search = function () {
        $scope.searchRoll = $scope.searchRoll.split(",");
        return function (entry) {
            for (let i = 0; i < $scope.searchRoll.length; i++) {

                if (entry.rollNo == $scope.searchRoll[i]) {
                    console.log(entry);
                    return entry;

                }
            }
        }
    }

    $scope.delete = function () {
        $scope.deleteRoll = $scope.deleteRoll.split(",");
        if (record.length == $scope.deleteRoll.length) {
            var result = confirm("Are you sure?");
            if (!result) {
                return;
            }
        }
        //if yes ==if the user presses yes in dialogue box
        for (let i = 0; i < $scope.deleteRoll.length; i++) {
            var arr=record.map(e => e.rollNo);
            var index = arr.indexOf(parseInt($scope.deleteRoll[i]));
            if(index>-1){
                record.splice(index, 1);    
            }
                    }
    }
        $scope.record = record;

   
})


 /*app.filter('search', function () {
        var RollNo = searchvar.split(",");
        console.log(RollNo);
        return function (entry) {
            for (let i = 0; i < RollNo.length; i++) {
                for (let j = 0; j < entry.length; j++) {
                    if (entry[j].rollNo == RollNo[i]) {
                        return entry;
                    }
                }
            }
        }
    })*/
    /* app.filter('search', function () {
      /*   return function (entry, RollNo) {
             console.log(RollNo); // `item` is the array object and `num` is the argument. In this case num = 100
             RollNo = RollNo.split(",");
             for (let i = 0; i < RollNo.length; i++) {
     
                 if (entry.rollNo == RollNo[i]) {
                     console.log(entry);
                     return entry;
     
                 }
             }
         }
     })*/
