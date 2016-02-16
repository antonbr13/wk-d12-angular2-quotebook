// Again note that I didn't include the extra [] as the second argument because I don't want to create a new module, but get my original friendsList module I already created.
var app = angular.module('userProfiles');


// Let's create a new controller and stick it as a property on our friendsList app. The way you do that is below.
// Note that every time you create a new controller, you get this $scope object.
// Whatever we stick on $scope will be available in our view (in this case, index.html is our view).

app.controller('mainCtrl', function($scope, mainService){

   $scope.getUsers = function(){
         $scope.users = mainService.getUsers();
   };

   $scope.getUsers();

});
