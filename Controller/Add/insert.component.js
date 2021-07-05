function insertController($scope) {
    $scope.validation = function () {
        var arr = record.map(e => e.rollNo);
        var index = arr.indexOf(parseInt($scope.rollNo));
        return index;
    }
    $scope.addEntry = function () {
        if ($scope.validation() != -1) {
            alert("enter unique value");
        }
        else {
            var obj = new studentDetailsObject($scope.fName, $scope.lName, $scope.rollNo, $scope.phoneNo);
            record.push(obj);
        }
    }
    $scope.record = record;
}
app.component('insert', {
    templateUrl: 'insert.html',
    controller: insertController
})

