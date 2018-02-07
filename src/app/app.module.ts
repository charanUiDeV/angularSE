import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
