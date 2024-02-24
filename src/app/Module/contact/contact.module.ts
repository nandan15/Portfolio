import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    ContactComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
