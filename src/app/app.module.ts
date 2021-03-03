import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarMenuComponent } from './components/bar-menu/bar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BarMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
