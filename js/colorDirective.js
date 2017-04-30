angular.module("triviaApp").directive("colorDir",function(){
   return {
       restrict: "A",
       controller: "mainCtrl",
       link:function(scope,element, attributes){
           $(scope).css("background","rebeccapurple")
       }
   } 
});