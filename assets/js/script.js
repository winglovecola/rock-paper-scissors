

// Assignment code here
var myapp = angular.module("app", ['ngAnimate']);
  myapp.controller("myController", function($scope, $interval, $timeout) {

    $scope.score = {
      userWin: 0,
      userLost: 0,
      userTie: 0,
      cpuWin: 0,
      cpuLost: 0,
      cpuTie: 0
    };

    $scope.showItem = {
      userRock: true,
      userPaper: true,
      userScissors: true,
      cpuRock: true,
      cpuPaper: false,
      cpuScissors: false
    };

    $scope.userPicked = "";
    $scope.battleMsg = "";

    $scope.cpuHandRotation = true;


    $scope.userPickRock = function () {
    
      $scope.showItem.userRock = true;
      $scope.showItem.userPaper = false;
      $scope.showItem.userScissors = false;

      $scope.userPicked = "R";

      $scope.cpuPick ();
    }

    $scope.userPickPaper = function () {
    
      $scope.showItem.userRock = false;
      $scope.showItem.userPaper = true;
      $scope.showItem.userScissors = false;
      $scope.userPicked = "P";

      $scope.cpuPick ();
    }

    $scope.userPickScissors = function () {
    
      $scope.showItem.userRock = false;
      $scope.showItem.userPaper = false;
      $scope.showItem.userScissors = true;
      $scope.userPicked = "S";

      $scope.cpuPick ();
    }


    $scope.cpuPick = function () {
      
      if ($scope.cpuHandRotation == false)
        return;
      
      $scope.cpuHandRotation = false;


      $scope.cpuRandomPicked = Math.round (getRandomArbitrary(0, 2));
      

      //random a cpu pick
      if ($scope.cpuRandomPicked == 0)
        $scope.cpuPicked = "R";
      else if ($scope.cpuRandomPicked == 1)
        $scope.cpuPicked = "P";
      else 
        $scope.cpuPicked = "S";


      if ($scope.cpuPicked == "R")
      {
        $scope.showItem.cpuRock = true;
        $scope.showItem.cpuPaper = false;
        $scope.showItem.cpuScissors = false;
      }
      else if ($scope.cpuPicked == "P")
      {
        $scope.showItem.cpuRock = false;
        $scope.showItem.cpuPaper = true;
        $scope.showItem.cpuScissors = false;
      }
      else 
      {
        $scope.showItem.cpuRock = false;
        $scope.showItem.cpuPaper = false;
        $scope.showItem.cpuScissors = true;
      }

      if ($scope.cpuPicked == "R")
      {
        if ($scope.userPicked == "R")
        {
          $scope.score.userTie++;
          $scope.battleMsg = "TIE GAME";
        }
        else if ($scope.userPicked == "P")
        {
          $scope.score.userWin++;
          $scope.battleMsg = "YOU WIN";
        }
        else 
        {
          $scope.score.userLost++;
          $scope.battleMsg = "YOU LOST";
        }
      }
      else if ($scope.cpuPicked == "P")
      {
        if ($scope.userPicked == "R")
        {
          $scope.score.userTie++;
          $scope.battleMsg = "YOU LOST";
        }
        else if ($scope.userPicked == "P")
        {
          $scope.score.userTie++;
          $scope.battleMsg = "TIE GAME";
        }
        else 
        {
          $scope.score.userWin++;
          $scope.battleMsg = "YOU WIN";
        }
      }
      else
      {
        if ($scope.userPicked == "R")
        {
          $scope.score.userWin++;
          $scope.battleMsg = "YOU WIN";
        }
        else if ($scope.userPicked == "P")
        {
          $scope.score.userLost++;
          $scope.battleMsg = "YOU LOST";
        }
        else 
        {
          $scope.score.userTie++;
          $scope.battleMsg = "TIE GAME";
        }

      }


      //reset game
      $timeout(function () {

        $scope.showItem.userRock = true;
        $scope.showItem.userPaper = true;
        $scope.showItem.userScissors = true;

        $scope.cpuHandRotation = true;
        
      }, 1500);
    }



    $interval(function () {

      if ($scope.cpuHandRotation)
      {

        if ($scope.showItem.cpuRock)
        {
          $scope.showItem.cpuRock = false;
          $scope.showItem.cpuPaper = true;
          $scope.showItem.cpuScissors = false;
        }
        else if ($scope.showItem.cpuPaper)
        {
          $scope.showItem.cpuRock = false;
          $scope.showItem.cpuPaper = false;
          $scope.showItem.cpuScissors = true;
        }
        else 
        {
          $scope.showItem.cpuRock = true;
          $scope.showItem.cpuPaper = false;
          $scope.showItem.cpuScissors = false;
        }
      }
      
      
      //console.log ($scope.showItem.cpuRock)
    }, 100);


});

//random number functions
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
