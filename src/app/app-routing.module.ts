import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'project',loadChildren:()=>import('../app/Module/project/project.module').then(m=>m.ProjectModule)},
  {path:'work',loadChildren:()=>import('../app/Module/work/work.module').then(m => m.WorkModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
