var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
    $routeProvider
    .when('/', {
        templateUrl: '/partials/questions/dashboard.html',
        controller: 'questionsController'
    })
    .when('/index', {
        templateUrl: '/partials/users/index.html',
        controller: 'usersController'
    })
    .when('/new_question', {
        templateUrl: '/partials/questions/new_question.html',
        controller: 'questionsController'
    })
    .when('/questions/:question_id', {
        templateUrl: '/partials/questions/show.html',
        controller: 'questionsController'
    })
    .when('/questions/:question_id/new_answer', {
        templateUrl: '/partials/answers/new_answer.html',
        controller: 'answersController'
    })
    .otherwise({
        redirectTo: '/'
    });
});