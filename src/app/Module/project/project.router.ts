import{NgModule} from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { ProjectComponent } from "./project/project.component";
const ProjectRoutes:Routes=[
    {path:'',component:ProjectComponent,children:[
        {path:'view',component:ViewComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(ProjectRoutes)],
    exports:[RouterModule]
})
export class projectrouter{}