 (function(){
	'use strict';
	
	angular
		.module('app')
		.controller('TableDirectiveController', TableDirectiveController);
		
	TableDirectiveController.$inject = ['$filter', '$scope'];
	
	function TableDirectiveController($filter, $scope){
		var vm  = this;
		vm.editMode = false;
		vm.addMode = false;
		vm.newIsntance = {};
		vm.editInstance = {};		
		
		vm.data = $scope.tableData;		
		vm.orderColumn = orderColumn;
		vm.editRow = editRow;
		vm.deleteRow = deleteRow;
		vm.saveRow = saveRow;
		vm.reset = reset;
		vm.openAddInstanceForm = openAddInstanceForm;
		vm.onAddNewInstance = onAddNewInstance;
		vm.cancelAddNewInstance = cancelAddNewInstance;
		
		
		var filterClicked = false;
		function orderColumn(col){
			vm.data = $filter('orderBy')(vm.data, col, filterClicked);
			filterClicked = !filterClicked;
		}
		
		function editRow(inst, index){			
			vm.editInstance = angular.copy(inst);
			vm.editInstance.startDate = new Date(inst.startDate);
			vm.editInstance.endDate = new Date(inst.endDate);
			vm.editIndex = index;

			vm.formatedStartDateValue = $filter('date')(new Date(inst.startDate), 'yyyy-MM-dd');					
			vm.formatedEndDateValue = $filter('date')(new Date(inst.endDate), 'yyyy-MM-dd');				
		}
		
		function deleteRow(inst){
			$scope.onDeleteRow(inst);
		}
		
		function saveRow(inst){
			var time = new Date();
			var copiedInst =angular.copy(inst);
			
			copiedInst.startDate = $filter('date')(inst.startDate, 'yyyy-MM-dd');	
			copiedInst.endDate = $filter('date')(inst.endDate, 'yyyy-MM-dd');

			$scope.onSaveEditRow(copiedInst);
			
			vm.editIndex = -1;
		}
		
		function reset(){
			vm.editInstance = {};
			vm.editIndex = -1;
		}
		
		function openAddInstanceForm(){
			vm.addMode = true;
			var time = new Date();
			vm.initailStartDateValue = $filter('date')(time.getTime(), 'yyyy-MM-dd');					
			vm.initialEndDateValue = $filter('date')(time.getTime(), 'yyyy-MM-dd');
			
			vm.newIsntance.startDate = time;
			vm.newIsntance.endDate = time;	
		}
		
		function onAddNewInstance(inst){
			var coppiedInst = angular.copy(inst);
			$scope.onAddNewRow(coppiedInst);
					
			delete vm.newIsntance.sprint;	
			delete vm.newIsntance.storyPoints;
		}
		
		function cancelAddNewInstance(){
			vm.addMode = false;			
		}
				
	}	 
 })();