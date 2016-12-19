/**
 * Created by DKings on 2016/12/19.
 */
/********** 自定义数据双向绑定的效果 ****************/
// function appViewModel(){
//     this.firstName = ko.observable("Bert");
//     this.lastName = ko.observable("Bertington");
// }
// ko.applyBindings(new appViewModel());


/*********** angularJs对跳转锚点的使用 ***********/
var app = angular.module('myApp',[]);
app.controller('show',['$scope','$location','$anchorScroll',function($scope,$location,$anchorScroll){
    $scope.arr=[1,3,2,5,4];
    $scope.jump=function(id){
        //console.log(id);
        $location.hash(id);//添加锚点
        $anchorScroll();    //重新定义服务,解决当滑动时点击锚点无作用的bug
    }

}]);