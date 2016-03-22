angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {
  $scope.products = Products.all(); //Return to us all of the products that we have saved in the DB in our service
  console.log('the products are retrived from the database', $scope.products);
})

.controller('ChatsCtrl', function($scope, Chats, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.image = 'http://theawesomer.com/photos/2012/11/251112_shark_socks_2.jpg';

  $scope.button = function(product){
    console.log('button was clicked', product, $scope.image);
    Products.saveProduct(product, $scope.image);
  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
