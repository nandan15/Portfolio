import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { projectrouter } from './project.router';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MovieComponent } from './movie/movie.component';
import { AugmentedrealtityComponent } from './augmentedrealtity/augmentedrealtity.component';
import { IotComponent } from './iot/iot.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatButtonModule } from '@angular/material/button';
import { OpenComponent } from './e-commerce/open/open.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ViewComponent,
    ECommerceComponent,
    MovieComponent,
    AugmentedrealtityComponent,
    IotComponent,
    OpenComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule,
    MatIconModule,
    projectrouter,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:[
    ProjectComponent,
    ViewComponent
  ]
})
export class ProjectModule { }
