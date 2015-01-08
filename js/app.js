var app = angular.module('app', []);

app.factory('MyService',function(){
		return {message:"Returning message from the service"}
	});

app.filter('reverse', function(MyService){
	return function(text){
		return text.split("").reverse().join("") + MyService.message;
	}
});

app.controller('FirstCtrl', function FirstCtrl($scope, MyService){
		    // var first = this;
		 	// first.classe = "label";
		 	$scope.data = MyService;
		});

	
app.controller('SecondCtrl', function SecondCtrl($scope, MyService){
		$scope.data = MyService;

		$scope.reverseMessage = function(message){
			return message.split("").reverse().join("");
		}
});	




	