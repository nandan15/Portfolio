import { Router, RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header/header.component";
const sharedRoutes:Routes=[
    {path:'header',component:HeaderComponent}
];
@NgModule({
    imports:[RouterModule.forChild(sharedRoutes)],
    exports:[RouterModule]
})
export class sharedrouter{}