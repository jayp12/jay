app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {			//By default Home page
				url:'/',
				templateUrl: 'home.html',
				controller: 'mycontrol'
			})

			.state('secondpage', {		//Navigate to second page
				url:'/secondpage',
				templateUrl: 'secondpage.html',
				controller: 'secondc'
			})
			
			.state('thirdpage', {			//Navigate to third page
				url:'/thirdpage',
				templateUrl: 'thirdpage.html',
				controller: 'thirdc'
			})

		});
