 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { WarningMessageComponent } from './warning-message.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    CustomerComponent,
    UserComponent,
    WarningMessageComponent,
    MarksheetComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
