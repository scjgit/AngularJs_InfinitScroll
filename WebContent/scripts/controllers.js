document.addEventListener('touchmove', function(e){
  e.preventDefault();
});

function phoneBrowserCntrl($scope,$http, $log){
	//Fetch the phone details from a file
    $http.get('./phones/phones.json').success(function(data){
		$scope.phones = data;
	});
}