import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { workrouter } from './work.router';
import { WorkViewComponent } from './work-view/work-view.component';
import { DialogModule } from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ButtonModule} from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    WorkComponent,
    WorkViewComponent
  ],
  imports: [
    CommonModule,
    workrouter,
    DialogModule,
    MatButtonModule,
    OverlayPanelModule,
    MatIconModule,
    ButtonModule
  ],
  exports:[
    WorkComponent,
    WorkViewComponent
  ]
})
export class WorkModule { }
