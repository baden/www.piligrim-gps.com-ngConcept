import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavtoolComponent } from './navtool/navtool.component';

@NgModule({
  declarations: [
    AppComponent,
    NavtoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: '$window',  useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
