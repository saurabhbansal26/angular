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
import { MyDropDownComponent } from './my-drop-down/my-drop-down.component';
import { ComponentOutputComponent } from './component-output/component-output.component';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    CustomerComponent,
    UserComponent,
    WarningMessageComponent,
    MarksheetComponent,
    MyDropDownComponent,
    ComponentOutputComponent,
    InputoutputComponent,
    ViewChildComponent
  
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
