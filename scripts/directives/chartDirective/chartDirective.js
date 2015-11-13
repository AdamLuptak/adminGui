angular.module('AdminGui')
.directive('chart', function() {
	return {
	   templateUrl:'scripts/directives/chartDirective/chartPlot.html',
        restrict: 'E',
        replace: true,
	}
});
