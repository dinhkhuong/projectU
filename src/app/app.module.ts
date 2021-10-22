import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowService } from './services/window.service';
import { RestAPIService } from './services/rest-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from 
'./components/project-list/project-list.component';
import { ProjectListSingleComponent } from 
'./components/project-list-single/project-list-single.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WindowService,
    RestAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
