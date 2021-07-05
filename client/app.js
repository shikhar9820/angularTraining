
var app = angular.module('StudentRecord', ['ui.router']);

function studentDetailsObject(fName, lName, rollNo, phoneNo) {
    this.fName = fName;
    this.lName = lName;
    this.rollNo = rollNo;
    this.phoneNo = phoneNo;
}
var record = new Array();//Global array 

app.config(function ($stateProvider, $urlRouterProvider) { //Angular Routing
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: "mainCtrl"
        })
        .state('insert', {
            url: '/insert',
            templateUrl: 'insert.html',
            controller: "mainCtrl"
        })
        .state('search', {
            url: '/search',
            templateUrl: 'search.html',
            controller: "mainCtrl"
        })
        .state('delete', {
            url: '/delete',
            templateUrl: 'delete.html',
            controller: "mainCtrl"
        });
    $urlRouterProvider.otherwise('/');
})

app.controller('mainCtrl', function ($scope,$http) {

    $scope.searchRoll = "Enter the Value";
    $scope.deleteRoll = "Enter the Value"; 

    $http.get("http://localhost:9000/studentDetails")
      .then(function(response){ //Get request for storing data in record array
         record=response.data;
         $scope.stdet=record;
    })
    
    //Roll No validation 
    let rollNoValidation= function(){   
        console.log("hi");
        var arr=record.map(iterator => iterator.rollNo);
        var index = arr.indexOf($scope.rollNo.toString());
        if (index!=-1){
            alert("enter unique value");
            return 0;}
        
        return 1;
   }
   //PhoneNo Validation for correct length 
   let phonNoValidation= function(){
   var phoneNo=$scope.phoneNo.toString();
   if(phoneNo.length!=10){
    alert("enter a 10 digit no");
      return 0;
   }
   else{
       return 1;
   }
}
// API call for data Entry
   $scope.addEntry = function () {
      if(rollNoValidation() && phonNoValidation() ){
        var obj = new studentDetailsObject($scope.fName, $scope.lName, $scope.rollNo, $scope.phoneNo);
        console.log(obj);
        $http.post("http://localhost:9000/studentDetails",obj).then(function (response) {
            console.log(response);
            record.push(response.data);
        });   
      }
}

//SearchBox validation
let isNumber= function(input){ //validate if the present input is in numbers
    var rollNo = input.replace(/,/g, '');
    if(isNaN(rollNo)){
        alert("please check your input, remove space or any other special character");
        return 0;
    }
    return 1;
}
let searchBoxValidation=function(input){
    input = input.split(",");
    for (let i = 0; i < input.length; i++) {//validate if the rollNo is present 
        var arr=record.map(iterator => iterator.rollNo);
        var index = arr.indexOf(input[i]);
        if(index==-1){
            alert("Student is not present");
            return 0;
        }
    }
    return 1;
}
let lengthValidation=function(input){
    input=input.split(",");             //validation on length of input
    if(record.length < input.length){
        alert("Renter the value");
        return 0;
    }
    else if (record.length == input.length) {
        var result = confirm("Are you sure?");
        if (!result) {
            return 0;
        }
        return 1;
    }
    return 1;
}
//API call for searching a student(s)
$scope.searchdata = function(){
    if(isNumber($scope.searchRoll) && searchBoxValidation($scope.searchRoll) && lengthValidation($scope.searchRoll)){
    $http.get("http://localhost:9000/searchstudent/?searchdata="+$scope.searchRoll).then(function(response){
    $scope.searched=response.data;
})
    }
}
//API call for deleting a student(s)
   $scope.delete = function () {
    if(isNumber($scope.deleteRoll) && searchBoxValidation($scope.deleteRoll) && lengthValidation($scope.deleteRoll)){
        $http.delete("http://localhost:9000/deletestudent/?deletedata="+$scope.deleteRoll)
        .then(function (response) {
            $scope.deleteRoll=$scope.deleteRoll.split(",");
            for (let i = 0; i < $scope.deleteRoll.length; i++) {
                var arr=record.map(e => e.rollNo);
                var index = arr.indexOf($scope.deleteRoll[i]);
                if(index>-1){
                    record.splice(index, 1);    
                }
            }
        });
    }
  }
        
})

