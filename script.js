angular.module('myApp', [])

angular.module('myApp')
	.controller('myController', ['$scope', function($scope) {
		$scope.name = "Ti"
		$scope.bio = "Coding Yogini - love and light"
		$scope.favBooks = "Neal Stephenson"
		$scope.favLibs = "JQuery"
		$scope.profileForm = function(event) {
			$scope.name = $scope.nameForm
			$scope.bio = $scope.bioForm
			$scope.favBooks = $scope.favBooksForm
			$scope.favLibs = $scope.favLibsForm
		}
        
		$scope.changeForm = false
		$scope.button = "Show Form";
		count = 2
		$scope.showForm = function(event) {
			$scope.changeForm = !$scope.changeForm
			count += 1
			if(count % 2 !== 0) {
				$scope.button = "Hide Form"
			}
			else {
				$scope.button = "Show Form"
			}

		}
	}])

