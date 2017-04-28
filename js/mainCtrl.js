angular.module("triviaApp").controller("mainCtrl",function($scope, mainService){
    $scope.test = "working!"
    
    $scope.getQuestions = function(){
        mainService.getQuestions().then(function(response){
        console.log(response.data);
        $scope.questions = response.data;
    })
    }
    
    
    
    
    $scope.getQuestions();
    

    
    
    $scope.saveForm = function(question){
        console.log(question);
        mainService.postQuestion(question).then(function(response){
            console.log(response);
        });
        $scope.questionForm = !$scope.questionForm
        console.log("$scope.saveForm")
        
    }
    
    
    
    
    $scope.isCorrect = function(param){
        console.log(param)
        if($scope. === param){
           console.log("CORRECT")
        }
    }
});