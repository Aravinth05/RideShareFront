(function(){
    angular
        .module("RideShareApp")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            login: login,
            logout: logout,
            register: register,
            findAllUsers: findAllUsers,
            updateUser: updateUser
           
        };
        return api;
     
        function logout() {
            return $http.post("http://localhost:3000/api/logout");
        }

        function updateUser(userId, user) {
            return $http.put('http://localhost:3000/api/user/' + userId, user);
        }

        function findAllUsers() {
            return $http.get("http://localhost:3000/api/user");
        }

        function register(user) {
            return $http.post("http://localhost:3000/api/register", user);
        }

        function login(user) {
            return $http.post("http://localhost:3000/api/login", user);
        }
    }
})();