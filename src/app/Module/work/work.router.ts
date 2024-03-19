import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { WorkComponent } from "./work/work.component";
import { WorkViewComponent } from "./work-view/work-view.component";

const WorkRoutes:Routes=[
    {path:'',component:WorkComponent,children:[
        {path:'workview',component:WorkViewComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(WorkRoutes)],
    exports:[RouterModule]
})
export class workrouter{}