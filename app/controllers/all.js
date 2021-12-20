app.controller("admins",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Admin/GetAll")
  .then(function(resp){
    $scope.admins = resp.data;
           
  },function(err){
      console.log(err);
  });

});
app.controller("customers",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Customer/GetAll")
  .then(function(resp){
    $scope.customers = resp.data;
          
  },function(err){
      console.log(err);
  });

});
app.controller("shops",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/ShopOwner/GetAll")
  .then(function(resp){
    $scope.shops = resp.data;
          
  },function(err){
      console.log(err);
  });

});
app.controller("affiliators",function($scope,$http,$location){
  
  
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.get("https://localhost:44360/api/Affiliator/GetAll")
  .then(function(resp){
    $scope.affiliators = resp.data;
          
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
            
  },function(err){
      console.log(err);
  });

});


//delete
app.controller("admindelete",function($scope,$http,$location,$routeParams){
  
  
  $http.delete("https://localhost:44360/api/Admin/Delete/"+$routeParams.id)
  .then(function(resp){
    
    $location.path("/Admin/Home");    
    alert("Delete complete");  
  },function(err){
    alert("Admin is not deleted");
      console.log(err);
  });

})

app.controller("customerdelete",function($scope,$http,$location,$routeParams){
  
  
  $http.delete("https://localhost:44360/api/Customer/Delete/"+$routeParams.id)
  .then(function(resp){
    
    $location.path("/Admin/Home");    
    alert("Delete complete");  
  },function(err){
    alert("Customer is not deleted");
      console.log(err);
  });

})

app.controller("shopdelete",function($scope,$http,$location,$routeParams){
  
  
  $http.delete("https://localhost:44360/api/ShopOwner/Delete/"+$routeParams.id)
  .then(function(resp){
    
    $location.path("/Admin/Home");    
    alert("Delete complete");  
  },function(err){
    alert("shop is not deleted");
      console.log(err);
  });

})

app.controller("affiliatordelete",function($scope,$http,$location,$routeParams){
  
  
  $http.delete("https://localhost:44360/api/Affiliator/Delete/"+$routeParams.id)
  .then(function(resp){
    
    $location.path("/Admin/Home");    
    alert("Delete complete");  
  },function(err){
    alert("Affiliator is not deleted");
      console.log(err);
  });

})

//post
app.controller("noticepost",function($scope,$http,$location){
       
  $scope.noticepost=function(){
    
       //ajax.post("api/login",$scope.data,function(resp){},function(err){});
       $http.post("https://localhost:44360/api/Notice/Insert",$scope.data)
       .then(function(resp){
        $location.path("/Admin/Home");
         
           
       },function(err){
           console.log(err);
       });
   };
 });


