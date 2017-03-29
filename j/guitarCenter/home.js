var app = angular.module("myapp",['ui.router','ngMessages'])
app.controller("mycontrol",function($scope,$http,$location,ser){


	$http.get("home.json")
	.success(function(resp){
		$scope.products = resp.allProducts;

		$scope.imgs = ["guitar1.jpg","guitar2.jpg","guitar3.jpg","guitar4.jpg","guitar5.jpg","guitar6.jpg","guitar7.jpg"];

		$scope.count = 0;
		$scope.pics = $scope.imgs[$scope.count]; 

		$scope.i = 0;
		$scope.product = $scope.products[$scope.i];
		$scope.product1 = $scope.products[$scope.i].image_path;
	    
	    

	});
	


	


		$scope.p1 = true;
		$scope.p2 = true;
		$scope.p3 = true;
		
		$scope.toggle1 = function(){
				$scope.p1 = $scope.p1 ? false : true;
		}
		$scope.toggle2 = function(){
				$scope.p2 = $scope.p2 ? false : true;
		}
		$scope.toggle3 = function(){
				$scope.p3 = $scope.p3 ? false : true;
		}

	
	$scope.next = function(){

		if($scope.count==$scope.imgs.length-1){
           $scope.count=-1;
       }

       $scope.count+=1;
       $scope.pics=$scope.imgs[$scope.count];

		
		if($scope.i==$scope.products.length-1){
           $scope.i=-1;
       }

       $scope.i+=1;
       $scope.product=$scope.products[$scope.i];
		
	   $scope.product1 = $scope.products[$scope.i].image_path;
}



	$scope.pre = function(){


		if($scope.count<1){
          $scope.count=$scope.imgs.length;
       }

       $scope.count-=1;
       $scope.pics=$scope.imgs[$scope.count];

       if($scope.i<1){
          $scope.i=$scope.products.length;
       }

       $scope.i-=1;
       $scope.product=$scope.products[$scope.i];

	
       $scope.product1 = $scope.products[$scope.i].image_path;
}

	$scope.buy = function(){
		$location.path('/secondpage');

		ser.description = $scope.product;
		ser.price = $scope.product;
		ser.img = $scope.product1;
		ser.review = $scope.product;



		
		
	};	
});







