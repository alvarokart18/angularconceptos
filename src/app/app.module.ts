import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {holamundo} from './miprimercomponete/primer.component' ;



import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    holamundo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
