myApp.service('ourSvc', function(){

this.reallyLike = [];
this.kindOfLike = [];


$scope.addArtist = function (){
  if($scope.score >= 50){
    $scope.reallyLike.push(buildArtist());
    $scope.name = '';
    $scope.genre = '';
    $scope.score = '';
  }
  else if($scope.score < 50){
    $scope.kindOfLike.push(buildArtist());
    $scope.name = '';
    $scope.genre = '';
  }
};
function buildArtist(){
  return {
    name: $scope.name,
    genre: $scope.genre,
    score: $scope.score
  };

 }
});
