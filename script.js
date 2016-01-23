angular.module('myApp', [])

angular.module('myApp')
	.controller('myController', ['$scope', function($scope) {
		$scope.name = "Ti Wegmeyer"
		$scope.bio = "...The Coding Yogini.  Live in the Light.  Love with your whole heart.  Be vulnerable.  Be real.  Dare - take risks.  Always take the high ground.  Be the change you wish to see in the world.  Be a love-maker, life-changer.  Love without labels."
		$scope.favBooks = "David Foster Wallace, Tom Robbins, Alice Walker, Neal Stephenson"
		$scope.favLibs = "Angular & JQuery"
		$scope.profileForm = function(event) {
			$scope.name = $scope.nameForm
			$scope.bio = $scope.bioForm
			$scope.favBooks = $scope.favBooksForm
			$scope.favLibs = $scope.favLibsForm
		}
        
		$scope.changeForm = false
		$scope.button = "Make Changes to Profile";
		counter = 2
		$scope.showForm = function(event) {
			$scope.changeForm = !$scope.changeForm
			counter += 1
			if(counter % 2 !== 0) {
				$scope.button = "Save Changes to Profile"
			}
			else {
				$scope.button = "Make Changes to Profile"
			}

		}
	}])

