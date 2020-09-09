import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';
import { ListEmpoyeeComponent } from './employee/list-empoyee/list-empoyee.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    ListEmpoyeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
