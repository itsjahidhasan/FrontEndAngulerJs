var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){

  $routeProvider

  //public route
  .when("/",{
    templateUrl:"views/pages/home.html",
    // controller:''
  })
  .when("/Products",{
    templateUrl:"views/pages/products.html",
    // controller:''
  })
  .when("/Shoplists",{
    templateUrl:"views/pages/shoplists.html",
    // controller:''
  })
  .when("/Contact",{
    templateUrl:"views/pages/contact.html",
    // controller:''
  })


  // Admin route
  .when("/Admin",{
    templateUrl:"views/pages/admin/login.html",
    controller:'login'
  })
  .when("/Admin/Home",{
    templateUrl:"views/pages/admin/home.html",
    controller:'home'
  })
  .when("/Admin/Profile",{
    templateUrl:"views/pages/admin/profile.html",
    controller:'profile'
  })
  .when("/Admin/User/Info",{
    templateUrl:"views/pages/admin/userinfo.html",
    // controller:''
  })
  .when("/Admin/Notice",{
    templateUrl:"views/pages/admin/notice.html",
    controller:'notices'
  })
  .when("/Notice/Post",{
    templateUrl:"views/pages/admin/noticepost.html",
    controller:'noticepost'
  })
  .when("/Admin/All",{
    templateUrl:"views/pages/admin/admininfo.html",
    controller:'admins'
  })
  .when("/Customer/All",{
    templateUrl:"views/pages/admin/customerinfo.html",
    controller:'customers'
  })
  .when("/Shopowner/All",{
    templateUrl:"views/pages/admin/shopinfo.html",
    controller:'shops'
  })
  .when("/Affiliator/All",{
    templateUrl:"views/pages/admin/affiliatorinfo.html",
    controller:'affiliators'
  })



  // Shop owner route
  .when("/ShopownerLogin",{
    //templateUrl:"",
    // controller:''
  })



  //All logout
  .when("/Logout",{
    templateUrl:"views/pages/home.html",
    controller:'logout'
  })

  //delete
  .when("/Admin/Delete/:id",{
    templateUrl:"views/pages/admin/admininfo.html",
    controller:'admindelete'
  })
 // All other case
  .otherwise({
    redirectTo:"/"
});

  
}]);
app.config(function($httpProvider){
  $httpProvider.interceptors.push('interCeptor');
})