/**
 * Created by DKings on 2017/1/4.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import  {LoginComponent} from "../login/login.componet"

@NgModule({
    imports:[
        BrowserModule,
        AppRoutingModule
    ],
    declarations:[
        AppComponent,
        LoginComponent
    ],
    providers:[

    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule { };