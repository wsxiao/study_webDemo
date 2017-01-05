/**
 * Created by DKings on 2017/1/4.
 */
import {Component} from "@angular/core";

@Component({
    // templatUrl  就要有此项
    moduleId: module.id,
    selector:'my-app',
    template:`<router-outlet></router-outlet>`
})

export class AppComponent {
    title = "公象网";
}