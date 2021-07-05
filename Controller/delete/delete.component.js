function deleteController($scope){
    var vm=this;
    
    $scope.delete = function () {
        $scope.deleteRoll = $scope.deleteRoll.split(",");
        if(record.length < $scope.deleteRoll.length){
            alert("Renter the value");
        }
        else if (record.length == $scope.deleteRoll.length) {
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
        $scope.record = record; //how to declare a global scope
}
app.component('delete', {
    templateUrl : 'delete/delete.html',
    controller : deleteController
})