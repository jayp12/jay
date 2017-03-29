app.controller("thirdc",function($scope,ser,$location){

	$scope.finalfname = ser.fn;
	$scope.finallname = ser.ln;
	$scope.finalemail = ser.email_id;
	$scope.finalphone = ser.phn;
	$scope.finalcc = ser.c_c;
	$scope.final_pic = ser.finalpic;
	$scope.fi_price = ser.final_price ;

	
$scope.backTo = function(){
	$location.path('/home');
}

	
});