/**
 * Created by DKings on 2017/1/4.
 */
//作用：引导跟模块
//为动态编译创建浏览器平台
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

//引入根模块AppModule
import { AppModule } from "./app.module";

//在引导过程搭建运行环境,从根模块AppModule的bootstrap数组中提出根组件AppComponent,创建该组件的template实例,并将其插入到组件selector标识的元素标签中,在这里元素标签就是my-app
platformBrowserDynamic().bootstrapModule(AppModule);

