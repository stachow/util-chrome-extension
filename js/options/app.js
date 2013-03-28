var myModule = angular.module('app', []).

	factory('storageService', storageService).

	directive('ccShowHide', function() {
	   return function(scope, element, attrs) {

	   		 element[scope.$eval(attrs.ccShowHide) ? 'show' : 'hide']();

		      scope.$watch(attrs.ccShowHide, function() {
		      		var show = scope.$eval(attrs.ccShowHide);
		      		var opts = scope.$eval(attrs.ccShowHideOpts) || {};
		      		opts.show = opts.show || 'fadeIn';
		      		opts.hide = opts.hide || 'fadeOut';
		      		if (show && opts.show === 'show' || !show && opts.hide === 'hide'){
		      			$(element)[show ? opts.show : opts.hide](); 
		      		} else {
		      			$(element)[show ? opts.show : opts.hide](150); 	
		      		}
		      })

   }
});