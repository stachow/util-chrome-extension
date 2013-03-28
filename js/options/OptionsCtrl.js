function OptionsCtrl($scope, storageService) {
  	 $scope.data = storageService.getData();
  	 $scope.save = function(){
  						storageService.setData(this.data);
  						$scope.data = angular.copy(storageService.getData());
	   };
  	 $scope.resetForm =function(index){
  						storageService.resetForm(index);
  						$scope.data = angular.copy(storageService.getData());
	   };
      $scope.reset =function(){
              storageService.resetData();
              $scope.data = angular.copy(storageService.getData());
      };
    	$scope.showAdvanced = false;
    	$scope.toggleAdvanced = function(){
    						$scope.showAdvanced = !$scope.showAdvanced;
    	};
}