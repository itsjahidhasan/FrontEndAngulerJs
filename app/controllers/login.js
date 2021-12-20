app.controller("login",function($scope,$http,$location){
  $scope.login=function(){
      
        //ajax.post("api/login",$scope.data,function(resp){},function(err){});
      $http.post("https://localhost:44360/api/Admin/Login",$scope.data)
      .then(function(resp){
          console.log(resp.data);
          if(resp.data.AccessToken!=null && resp.data.User_Id!=null){
            localStorage.setItem("token",resp.data.AccessToken);
            localStorage.setItem("User_Id",resp.data.User_Id);
          
          
            $location.path("/Admin/Home");
          }
          else{
              alert("Username or Password is incorrect");
            $location.path("/Admin");
          }
          
          },function(err){
        
            $location.path("/Admin");
            console.log(err);
          });
     
       
      
  };
});