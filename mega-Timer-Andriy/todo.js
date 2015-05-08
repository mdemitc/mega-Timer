angular.module('todoApp', [])
    .controller('TodoListController', ['$scope', function($scope) {

        $scope.todos = [];

        $scope.toggle = function (t) {
            if (t.state === t.states.paused) {
                t.timer = setInterval(function () {
                    $scope.$apply(function () {
                        t.start();
                    })}, 1000);
            }
            else {
                t.pause();
                clearInterval(t.timer);
                delete  t.timer;
            }
        }


        $scope.addTodo = function() {
            var s, newTask;
            s = $scope.todoText? $scope.todoText:'';
            newTask = new Timer(s);
            //newTask = {title: s, timeSeconds: 0, state: t.states.paused, timer: null};

            $scope.todos.push(newTask);
            $scope.todoText = '';
        };

        $scope.todoText = '111111';
        $scope.addTodo();

        $scope.todoText = '222222';
        $scope.addTodo();


        $scope.archive = function (t) {
            var oldTodos = $scope.todos;
            t.stop();
            console.log(t.state);
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (todo.state !== todo.states.finished) $scope.todos.push(todo);
            });
            //delete  t;
        }

        //$scope.remaining = function() {
        //    var count = 0;
        //    angular.forEach($scope.todos, function(todo) {
        //        count += todo.state ? 0 : 1;

        //    });
        //    return count;
        //};
    }]);