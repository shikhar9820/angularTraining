app.controller('insertController',function ($scope,insertSvc){
    $scope.subject        = ["English","Maths","Science","SocialScience","Hindi"];
    $scope.areaArr        = ["Delhi","Mumbai","Kolkata","Jammu","Chennai"];
    $scope.schoolArr      = ["Kv","Pv","Dav","Hes","Gd"];
    $scope.classArr       = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    $scope.subjectDetails = [];
    $scope.stdet=record;
    $scope.addEntry = function (){
    var obj = new studentDetailsObject($scope.fName, $scope.lName, $scope.rollNo, $scope.phoneNo,$scope.area,$scope.class,$scope.school,$scope.subjectDetails);
    insertSvc.insertStudent(obj).then(function (response) {
        console.log(response);
        record.push(response.data);
        console.log(record);
      });  
    } 
})



