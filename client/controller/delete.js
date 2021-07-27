app.controller('deleteController',function ($scope,deleteSvc){
    $scope.deleteRoll     = "Enter the Value"; 
    $scope.stdet=record;
    $scope.delete = function ()
     {
            deleteSvc.deleteStudent($scope.deleteRoll).then(function (response) {
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
      
            
    })


/*
app.component('delete', {
    templateUrl : 'delete/delete.html',
    controller : deleteController,
    controllerAs :'vm'
})
*/