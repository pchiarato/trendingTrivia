angular.module("triviaApp").controller("mainCtrl",function($scope, mainService){
    $scope.test = "working!"
    
    $scope.getQuestions = function(){
        mainService.getQuestions().then(function(response){
        console.log(response.data);
        $scope.questions = response.data;
    })
    }
    
    $scope.getQuestions();
    
     $scope.changeColor = null;
    
    
    $scope.saveForm = function(question){
        console.log(question);
        mainService.postQuestion(question).then(function(response){
            console.log(response);
        });
        $scope.questionForm = !$scope.questionForm
        console.log("$scope.saveForm")
        
    }
     
    $scope.isCorrect = function(param,option){
//        console.log(option)
//        console.log(param)
        if(option == param){
           $scope.changeColor = true;
        }
    }
    
    $scope.nextPage = function(){
        mainService.nextPage();
        $scope.getQuestions();
        $scope.getPage();
    }
    
    $scope.previousPage = function(){
        mainService.previousPage();
        $scope.getQuestions();
        $scope.getPage();
       
    }
    
    $scope.getPage = function(){
        mainService.getPage();
    }
    
   
});