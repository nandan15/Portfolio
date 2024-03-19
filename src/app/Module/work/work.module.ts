import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { workrouter } from './work.router';
import { WorkViewComponent } from './work-view/work-view.component';


@NgModule({
  declarations: [
    WorkComponent,
    WorkViewComponent
  ],
  imports: [
    CommonModule,
    workrouter
  ],
  exports:[
    WorkComponent,
    WorkViewComponent
  ]
})
export class WorkModule { }
