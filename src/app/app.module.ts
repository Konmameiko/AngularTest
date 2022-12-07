/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2022-11-22 23:47:51
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoloComponent} from './holo/holo.component';

@NgModule({
  declarations: [
    AppComponent,
    HoloComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
