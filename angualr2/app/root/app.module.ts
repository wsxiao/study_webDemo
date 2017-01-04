/**
 * Created by DKings on 2017/1/3.
 */
//引入@NgModule装饰器
import { NgModule } from '@angular/core';
//引入与DOM和浏览器相关的模块,帮助DOM往浏览器渲染
import { BrowserModule } from '@angular/platform-browser';
//在让表单输入支持双向数据绑定之前,需要先导入FormsModule模块
import { FormsModule } from '@angular/forms';

//引入根组件
import { AppComponent } from './app.component';
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

//@NgModule装饰器将AppModule标记为Angular模块类(也叫作NgModule类)
@NgModule({
    //imports数组,只有NgModule类,当需要某些模块的特性时,就将模块引入该数组
    imports: [
        BrowserModule,
        FormsModule
    ],
    //组件,指令和管道,属于declarations数组,告诉Angular哪个组件属于AppModule
    declarations: [
        AppComponent,
        // HeroDetailComponent
    ],
    //bootstrap数组,通过引导根AppModule来启动应用。在启动过程中,其中一步是创建列在bootstrap数组的组件,并将它们每一个都插入到浏览器的DOM中
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}