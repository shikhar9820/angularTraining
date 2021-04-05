app.controller('delteCtrl', function ($scope) {
    //this.searchRoll = "123,345667774,12322";
    console.log(record);
    //console.log($scope.entry);
    $scope.addEntry = function () {
        //record.push($scope.newData);
        var obj = new studentDetailsObject($scope.fName, $scope.lName, $scope.rollNo, $scope.phoneNo);
        record.push(obj);
        console.log(record);
    }

    $scope.record = record;
})