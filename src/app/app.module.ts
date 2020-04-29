import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './_app-root/app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { SalaryColorDirective } from './directives/salary-color/salary-color.directive';
import { EmployeeNewModalComponent } from './components/employee-new-modal/employee-new-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
