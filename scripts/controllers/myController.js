angular.module("myModule").controller("myController",function($scope){
    
    $scope.employees ={
        firstName:"First Name",
        lastName:"Last Name",
        hourlyRate:0,
        totalHour:0
    }; 
    $scope.grossSalary=function(){
        return $scope.employees.hourlyRate*$scope.employees.totalHour;   
    }
    $scope.tax=function(){
        return $scope.grossSalary()*.1;
    }
    $scope.netSalary=function(){
        return $scope.grossSalary()-$scope.tax();
    }
    
    
    
    $scope.nextData=function(){
        
    }
});