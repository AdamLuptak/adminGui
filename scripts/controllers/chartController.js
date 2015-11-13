'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controlle
 r of the sbAdminApp
 */







 angular.module('AdminGui')
 .controller('ChartCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.line = {
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
     series: ['Series A', 'Series B'],
     data: [
     [65, 59, 80, 81, 56, 55, 40],
     [28, 48, 40, 19, 86, 27, 90]
     ],
     onClick: function (points, evt) {
       console.log(points, evt);
   }
};


var charData = [
{
    id: 1,
    type: "line",
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    series: ['Series A', 'Series B'],
    data: [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
    ],


},
{
    id: 2,
    type: "bar",
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    series: ['Series A', 'Series B'],

      data:[
   [65, 59, 90, 81, 56, 55, 40],
   [28, 48, 40, 19, 96, 27, 100]
   ]

},

{
    id: 3,
    type: "pie",
    labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    data : [300, 500, 100]

},

]; 

$scope.chartType = function(){

return "line";
};

$scope.dataChart = charData;

console.log($scope.dataChart[0]);

 $scope.bar = {
   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
   series: ['Series A', 'Series B'],

   data: [
   [65, 59, 80, 81, 56, 55, 40],
   [28, 48, 40, 19, 86, 27, 100]
   ]

};

$scope.donut = {
   labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
   data: [300, 500, 100]
};

$scope.radar = {
   labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

   data:[
   [65, 59, 90, 81, 56, 55, 40],
   [28, 48, 40, 19, 96, 27, 100]
   ]
};

$scope.pie = {
   labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
   data : [300, 500, 100]
};

$scope.polar = {
   labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
   data : [300, 500, 100, 40, 120]
};

$scope.dynamic = {
   labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
   data : [300, 500, 100, 40, 120],
   type : 'PolarArea',

   toggle : function () 
   {
      this.type = this.type === 'PolarArea' ?
      'Pie' : 'PolarArea';
  }
};
}]);