import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './Module/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModule } from './Module/project/project.module';
import { OpenComponent } from './Module/movie/open/open.component';
@NgModule({
  declarations: [
    AppComponent,
    OpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
