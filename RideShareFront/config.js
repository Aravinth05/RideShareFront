(function() {
    angular.module("RideShareApp")
        .config(function($routeProvider, $httpProvider) {
            $routeProvider
           
              .when('/map', {
                  templateUrl: 'profile/profile.view.html',
                  controller: 'ProfileCtrl',
                  resolve: {
                    // loggedin: checkLoggedin
                  }
              })
              .when('/login', {
            templateUrl: 'login/login.view.html',
            controller: 'LoginCtrl',
                 })
              .when('/register', {
                  templateUrl: 'register/register.view.html',
                  controller: 'RegisterCtrl',
                  
                })
              .when('/profile', { 
            templateUrl: 'profile/edit_profile/profile.view.html',
            controller: 'EditProfileCtrl',
            //resolve: {
            //    //loggedin: checkLoggedin
            //}
        })
              .otherwise({
                  redirectTo: '/login'
              });
        });
    

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
    {
        var deferred = $q.defer();
    
        $http.get('http://localhost:3000/api/loggedin').success(function (user)
        {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0')
            {
                $rootScope.currentUser = user;
                deferred.resolve();
            }
            // User is Not Authenticated
            else
            {
                $rootScope.errorMessage = 'You need to log in.';
                deferred.reject();
                $location.url('/login');
            }
        });
        
        return deferred.promise;
    };
    

  
})();

