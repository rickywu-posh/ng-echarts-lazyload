/**
 * Created by WUYUYU on 2016/8/18.
 */
angular.module('app').directive('ngEchartsLazyload',[function(){
    return {
        restrict:'A',
        link:function(scope, elem, attrs){
            angular.element(elem).ngEcharts_lazyload();
        }
    };
}]);