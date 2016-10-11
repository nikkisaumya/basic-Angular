var Todo = angular.module('Todo', [])
.controller('todoController',function($scope) {
  console.log("Todo")
  $scope.todos = [
    {'title':'maths','done':false}
  ];

  $scope.addTodo = function(){
    $scope.todos.push({'title':$scope.newTodo, 'done':false})
    $scope.newTodo = ''
  }
  $scope.clearCompleted = function() {
    console.log("clear completed")
     $scope.todos = $scope.todos.filter(function(item){
       return !item.done
    })
  }
  $scope.deleteItem = function (todo){
    var todos = $scope.todos;
    todos.splice(todos.indexOf(todo), 1);
  }
  
})

function changeTab(index)
{
  switch(index)
  {
  case 1:
    document.getElementById("all_list_wrapper").style.display = "block";
    document.getElementById("active_list_wrapper").style.display = "none";
    document.getElementById("complete_list_wrapper").style.display = "none";
    break;
  case 2:
    document.getElementById("all_list_wrapper").style.display = "none";
    document.getElementById("active_list_wrapper").style.display = "block";
    document.getElementById("complete_list_wrapper").style.display = "none";
    break;
  case 3:
    document.getElementById("all_list_wrapper").style.display = "none";
    document.getElementById("active_list_wrapper").style.display = "none";
    document.getElementById("complete_list_wrapper").style.display = "block";
    break;
  default:;
  }
}
