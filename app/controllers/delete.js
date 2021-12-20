app.controller("admindelete",function($scope,$http,$location,$routeParams){
  
  // var id = localStorage.getItem("User_Id")
  //ajax.post("api/login",$scope.data,function(resp){},function(err){});
  $http.delete("https://localhost:44360/api/Admin/Delete/"+$routeParams.id)
  .then(function(resp){
    alert("Admin is deleted");
    $location.path("/Admin/Home");      
  },function(err){
    alert("Admin is not deleted");
      console.log(err);
  });

})