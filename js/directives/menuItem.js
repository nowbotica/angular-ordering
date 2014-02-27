angular.module('app.directives.menuItem', [])
	.directive('menuItem', function(){
		return {
			restrict: 'E',
			templateUrl: "templates/menuItem.html",
			scope: {
				item: '=',
				// title: '=',
				// logic: '='
			},
			transclude: true,
			replace: true,
			link: function($scope, $element){
				console.log('link', $scope.$id, $element.get())
			},
			controller: function($scope){
				// console.log($scope.item);
			}

		}
	});