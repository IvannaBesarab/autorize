(function(){
   'use strict';

   angular
       .module('app')
       .animation('.fade',['$animateCss', function($animateCss){
       return{
           enter: function( elem, done) {
               var height = elem[0].offsetHeight;
               var animator =  $animateCss(element, {
                   easing: 'ease',
                   from: {opacity: 1 },
                   to: {opacity: 0 },
                   duration: 3
               });
               if(animator){
                   return animator.start().finally(function(){
                       elem[0].style.height = '';
                       done();
                   })
               }
               done();
           }
       }

   }]);
})();
