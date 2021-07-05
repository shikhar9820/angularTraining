function searchController($scope){
    var vm=this;
    $scope.searchRoll = "Enter The Value";
    $scope.search = function () {
        $scope.searchRoll = $scope.searchRoll.split(",");
        return function (entry) {
            for (let i = 0; i < $scope.searchRoll.length; i++) {
                    if (entry.rollNo == $scope.searchRoll[i]) {
                    return entry;

                }
            }
        }
    }
    $scope.record=record;
}
app.component('search', {
    templateUrl : 'search/search.html',
    controller : searchController
})