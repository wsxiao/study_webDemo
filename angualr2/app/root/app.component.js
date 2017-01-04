"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by DKings on 2017/1/3.
 */
//引入组件@Component装饰器
var core_1 = require('@angular/core');
// //从hero.ts中导出Hero类,在本组件文件中引用它
// import { Hero } from '../hero/hero';
// //导入HeroService服务
// import { HeroService } from '../hero-service/hero.service';
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.getHeroes = function () {
        this.heroes = this.heroService.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    //ngOnInit生命周期钩子
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent = __decorate([
        core_1.Component({
            //selector标识元素标签
            selector: 'my-app',
            template: "<h1>hello world</h1>",
            // style:[],    // 没有可以不写
            //注册一个HeroService提供商,告诉注入器如何创建HeroService,在@Component组件的元数据底部添加providers数组属性如下
            providers: [
                HeroService
            ]
        }),
        __param(0, core_1.Inject(HeroService))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map