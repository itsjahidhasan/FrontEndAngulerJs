app.controller("profile",function($scope,$http,$location){
  
      var id = localStorage.getItem("User_Id")
      //ajax.post("api/login",$scope.data,function(resp){},function(err){});
      $http.get("https://localhost:44360/api/Admin/Get/" + id)
      .then(function(resp){
        $scope.profile = resp.data;        
      },function(err){
          console.log(err);
      });
  
});
app.controller("home",function($scope,$http,$location){
  
  var id = localStorage.getItem("User_Id")
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Admin/Get/" + id)
  .then(function(resp){
    $scope.home = resp.data;        
  },function(err){
      console.log(err);
  });

});