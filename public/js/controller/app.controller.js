 (function(){
	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

	AppController.$inject = ['$scope'];

	function AppController($scope){
		var vm  = this;

        vm.data = [{
            id:1,
            item:'Тренування 1'
        },
        {
            id:1,
            item:'Тренування 2'
        },
        {
            id:1,
            item:'Тренування 3'
        },
        {
            id:1,
            item:'Тренування 4'
        }
    ]


	}
 })();
