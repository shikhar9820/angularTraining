app.controller('analyticsController',function ($scope,ananlyticSvc) {
    $scope.stdet=record;
    $scope.areaArr        = ["Delhi","Mumbai","Kolkata","Jammu","Chennai"];
    $scope.schoolArr      = ["Kv","Pv","Dav","Hes","Gd"];
    $scope.classArr       = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    $scope.analytics = function(param1,param2,param3){
        ananlyticSvc.searchStudent(param1,param2,param3).then(function(response)
        {
        $scope.searchedAnalytics=response.data;
    })
    }
})


/*app.component('analyticComp', {
    templateUrl: 'analytics.html',
    controller: analyticController,
    controllerAs :'vm'
})
*/
