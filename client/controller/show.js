app.controller('showController',function ($scope){
    $scope.stdet=record;
    $scope.showStudent=function(detail){
        let details=record.find(object => object._id == detail);
        details.subject.sort((firstItem, secondItem) => secondItem.marks - firstItem.marks);
        alert(JSON.stringify(details.subject.slice(0,3)));
    }
})


/*
app.component('show', {
    templateUrl : 'show.html',
    controller : showController,
    controllerAs : 'vm'
})
*/
