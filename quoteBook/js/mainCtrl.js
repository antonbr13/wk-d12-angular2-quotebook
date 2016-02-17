app.controller('mainCtrl', function($scope, dataService) {

$scope.quotes = dataService.getData();
$scope.add = dataService.addData;
$scope.remove = dataService.removeData;






});
