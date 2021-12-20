app.controller("admins",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Admin/GetAll")
  .then(function(resp){
    $scope.admins = resp.data;
    console.log(resp.data);        
  },function(err){
      console.log(err);
  });

});