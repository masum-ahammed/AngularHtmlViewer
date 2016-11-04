(function () {
    angular.module('html-tag-parser').controller('TabsDemoCtrl', TabsDemoCtrl);

    TabsDemoCtrl.$inject = ['$scope', '$window','$timeout'];
    function TabsDemoCtrl($scope, $window, $timeout) {
        $scope.htmlText = '';
        $scope.tabs = [
          { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
          { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];

        $scope.renderPreview = function () {
            $scope.htmlText = 'This is my text.';
        };

        $scope.model = {
            name: 'Tabs'
        };
    }
   
})();