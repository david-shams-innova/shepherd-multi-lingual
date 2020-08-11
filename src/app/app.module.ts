import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShepherdComponent } from './shepherd/shepherd.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ShepherdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
