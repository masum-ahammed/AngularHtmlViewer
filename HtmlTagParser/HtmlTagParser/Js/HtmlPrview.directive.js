(function () {
    angular.module('html-tag-parser').directive('bsHtmlPreview', htmlPreview);


    function htmlPreview() {
        var directive = {
            scope: {
                content: '='
            },
            link: link,
            template: '<div><iframe name="htmlPreviewTarget" src="about:blank"  frameborder="0" width="100%" height="100%" scrolling="auto"></iframe></div>',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch('content', function (newValue, oldValue) {
                if (newValue) {
                    console.log('newValue : ' + newValue);
                    element.find('iframe')[0].src = "data:text/html;charset=utf-8," + escape(newValue);
                }
            });
        }
    }
   
})();