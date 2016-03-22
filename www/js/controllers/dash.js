'use strict';

app.controller('DashCtrl', function($scope, Products) {
  $scope.products = Products.all(); //Return to us all of the products that we have saved in the DB in our service
  console.log('the products are retrived from the database', $scope.products);

})
