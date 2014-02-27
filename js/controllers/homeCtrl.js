angular
	.module('app')
	// .controller('homeCtrl', ['$scope', 'menu',
	.controller('homeCtrl', ['$scope', 'menu',
 		// function($scope, menu){
 		function($scope, menu){
			$scope.title = "Menu";
			$scope.items = ['item1', 'item2', 'item3'];
			// $scope.menu = Menu;
			$scope.menu = menu;
			$scope.selectedValue =  $scope.items[1];

			$scope.save = function() {
				alert(JSON.stringify($scope.menu));
				// $http.post('/api/menu', menu);
			}
		}
	]);