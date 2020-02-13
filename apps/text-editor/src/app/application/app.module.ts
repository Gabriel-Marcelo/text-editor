import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../user-interface/app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MatInputModule, FlexModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
