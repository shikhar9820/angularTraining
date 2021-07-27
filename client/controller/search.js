app.controller('searchController',function ($scope,searchSvc){
    $scope.searchRoll     = "Enter the Value";
    $scope.stdet=record;
    $scope.searchdata = function(){
        searchSvc.searchStudent($scope.searchRoll).then(function(response)
        {
             $scope.searched=response.data;
        })
        
    }
})

/*
app.component('search', {
    templateUrl : 'search.html',
    controller : searchController,
    controllerAs : 'vm'
})
*/