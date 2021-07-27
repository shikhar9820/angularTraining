
var app = angular.module('StudentRecord', ['ui.router']);

function studentDetailsObject(fName,lName,rollNo,phoneNo,area,std,school,subjectDetail) {
    this.fName   = fName;
    this.lName   = lName;
    this.rollNo  = rollNo;
    this.phoneNo = phoneNo;
    this.area    = area;
    this.std     = std;
    this.school  = school;
    this.subject = subjectDetail;
}
var record = new Array();//Global array 
app.config(function ($stateProvider, $urlRouterProvider) { //Angular Routing
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: "mainctrl"
        })
        .state('insert', {
            url: '/insert',
            templateUrl: 'view/insert.html',
            controller: "insertController"
        })
        .state('search', {
            url: '/search',
            templateUrl: 'view/search.html',
            controller: "searchController"
        })
        .state('delete', {
            url: '/delete',
            templateUrl: 'view/delete.html',
            controller: "deleteController"
        })
        .state('analytics', {
            url: '/analytics',
            templateUrl: 'view/analytics.html',
            controller: "analyticsController"
        })
        .state('student', {
            url: '/studentDetails',
            templateUrl: 'view/show.html',
            controller: "showController"
        });
    $urlRouterProvider.otherwise('/');
})


app.controller('mainCtrl', function ($scope,getSvc) {
      $scope.getData= function(){
         getSvc.showStudent().then(function(response){
         record=response.data;
         $scope.stdet=record;
    })
}
})

