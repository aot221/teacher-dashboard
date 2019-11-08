var dashboardApp  =  angular.module('dashboardApp', []);

dashboardApp.controller('dashboardCtrl', function($scope, $http){

  	//default threshold percentage for chronically absent
  	$scope.threshold = 80;

  	//retrieve the student data from json file and set it
	$http.get('students.json').then(function(result) {
		$scope.students = result.data;
	});

});

angular.module('dashBoardApp', []).controller('dashboardCtrl', function($scope, $http){
	
});