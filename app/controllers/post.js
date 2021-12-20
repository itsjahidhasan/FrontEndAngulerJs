app.controller("noticepost",function($scope,$http,$location){
       
 $scope.noticepost=function(){
   
      //ajax.post("api/login",$scope.data,function(resp){},function(err){});
      $http.post("https://localhost:44360/api/Notice/Insert",$scope.data)
      .then(function(resp){
          console.log(resp.data);
          $location.path("/Admin/Notice");
      },function(err){
          console.log(err);
      });
  };
});