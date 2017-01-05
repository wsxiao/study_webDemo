"use strict";
/**
 * Created by DKings on 2017/1/4.
 */
//作用：引导跟模块
//为动态编译创建浏览器平台
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//引入根模块AppModule
var app_module_1 = require("./app.module");
//在引导过程搭建运行环境,从根模块AppModule的bootstrap数组中提出根组件AppComponent,创建该组件的template实例,并将其插入到组件selector标识的元素标签中,在这里元素标签就是my-app
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map