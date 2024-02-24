import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    AboutComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
