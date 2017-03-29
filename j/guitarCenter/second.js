

app.controller("secondc",function($scope,ser,$location){

	$scope.finalprice = ser.price;
	$scope.finaldescription = ser.description;
	$scope.finalimg = ser.img;
	$scope.finalreview = ser.review;

	$scope.info = false;
	$scope.showonclick = false;




	$scope.sub = function(){
		$scope.info = true;
		$scope.showonclick = true;
	};

	$scope.edit = function(){
		$scope.info = false;
		$scope.showonclick = false;
	};

	$scope.purchase = function(){
		$location.path('/thirdpage');

		ser.fn = $scope.fname;
		ser.ln = $scope.lname;
		ser.email_id = $scope.email;
		ser.phn = $scope.phno;
		ser.c_c = $scope.cc;
		ser.finalpic = $scope.finalimg;
		ser.final_price = $scope.finalprice;
	};

	$scope.retu = function(){
		$location.path('/home');
	}
});