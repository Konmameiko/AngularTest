import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoloComponentComponent } from './holo/holo-component/holo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HoloComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
