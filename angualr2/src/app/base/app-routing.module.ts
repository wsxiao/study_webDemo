/**
 * Created by shane on 2017/1/4.
 */
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "../login/login.componet";


const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes,{useHash:true} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }