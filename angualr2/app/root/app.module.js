"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by DKings on 2017/1/3.
 */
//引入@NgModule装饰器
var core_1 = require('@angular/core');
//引入与DOM和浏览器相关的模块,帮助DOM往浏览器渲染
var platform_browser_1 = require('@angular/platform-browser');
//在让表单输入支持双向数据绑定之前,需要先导入FormsModule模块
var forms_1 = require('@angular/forms');
//引入根组件
var app_component_1 = require('./app.component');
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
//@NgModule装饰器将AppModule标记为Angular模块类(也叫作NgModule类)
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //imports数组,只有NgModule类,当需要某些模块的特性时,就将模块引入该数组
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            //组件,指令和管道,属于declarations数组,告诉Angular哪个组件属于AppModule
            declarations: [
                app_component_1.AppComponent,
            ],
            //bootstrap数组,通过引导根AppModule来启动应用。在启动过程中,其中一步是创建列在bootstrap数组的组件,并将它们每一个都插入到浏览器的DOM中
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map