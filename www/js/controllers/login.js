'use strict'

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
  $scope.emailLogin = function(){
    console.log('login button was clicked');
  // Triggered on a button click, or some other target
  $scope.user = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    templateUrl: 'templates/partials/login.html',
    title: 'Signin',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      {
      text: '<b>Login</b>',
      type: 'button-energized',
      onTap: function(user) {
          user = $scope.user;
          console.log('the user is', user);
          //log user in
          Auth.login(user).then(function(){
            console.log('user is now logged in');
            $state.go('tab.dash');
          }, function(err) {
            console.log('Error...', err);
          });
        }
      },
      {
        text: '<b>Register</b>',
        type: 'button-calm',
        onTap: function(user) {
            user = $scope.user;
            console.log('the user is', user);
            //register user
            Auth.register(user).then(function(){
              console.log('user registered succesfully');
                //send them to the dashboard
              $state.go('tab.dash');
            }, function(err) {
              console.log('Error...', err);
            });
        }
      }
    ]
  });
 };
});
