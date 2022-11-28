import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewnewsComponent } from './viewnews/viewnews.component';


const myroute:Routes=[
  {
    path:"",
    component:ViewnewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
