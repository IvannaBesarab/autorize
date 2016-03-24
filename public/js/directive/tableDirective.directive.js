(function(){
	'use strict';
	
	angular
		.module('app')
		.directive('tableDirective', tableDirective);
	
	tableDirective.$inject = ['$compile', '$http'];
	
	function tableDirective($compile, $http){
		return{
			rescrict: 'E',
			scope: {
				tableData: '=', 
				onSaveEditRow:'=', 
				onDeleteRow: '=', 
				onAddNewRow:'='
				},
			templateUrl: 'js/template/tableDirective.template.html',
			controller: 'TableDirectiveController',
			controllerAs: 'vm'
		}
	}	
})();

