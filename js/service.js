angular.module("triviaApp").service("mainService",function($http){
    
    this.getQuestions = function(){
        return $http.get("https://practiceapi.devmountain.com/api/trivia/questions/");
    }
    
    
    this.postQuestion = function(question){
        console.log("postQuestion")
        
        return $http.post("https://practiceapi.devmountain.com/api/trivia/questions/", question);
        
        
    }
    
    
    
});