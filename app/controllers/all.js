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
app.controller("customers",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Customer/GetAll")
  .then(function(resp){
    $scope.customers = resp.data;
    console.log(resp.data);        
  },function(err){
      console.log(err);
  });

});
app.controller("shops",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/ShopOwner/GetAll")
  .then(function(resp){
    $scope.shops = resp.data;
    console.log(resp.data);        
  },function(err){
      console.log(err);
  });

});
app.controller("affiliators",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Affiliator/GetAll")
  .then(function(resp){
    $scope.affiliators = resp.data;
    console.log(resp.data);        
  },function(err){
      console.log(err);
  });

});


// notice

app.controller("notices",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Notice/GetAll")
  .then(function(resp){
    $scope.notices = resp.data;
    console.log(resp.data);        
  },function(err){
      console.log(err);
  });

});