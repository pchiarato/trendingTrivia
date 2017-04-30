angular.module("triviaApp").service("mainService",function($http){
    var page = 1;
    
    this.getQuestions = function(){
        return $http.get("https://practiceapi.devmountain.com/api/trivia/questions/?page="+page);
    }
    
    
    this.postQuestion = function(question){
        console.log("postQuestion")
        
        return $http.post("https://practiceapi.devmountain.com/api/trivia/questions/", question);
        
        
    }
    this.nextPage = function(){
        page++;
         console.log("Service nextPage!")
    }
    
    this.previousPage = function(){
        if (page >1){
            page--;
        }else {
            page = 1;
        }
        console.log("Service previousPage!")
        
    }
    
    this.getPage = function(){
        return page;
    }
    
    
    
});