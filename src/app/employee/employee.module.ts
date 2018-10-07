import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeResolver } from './services/employee.resolver';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [ EmployeeComponent ],
  providers: [ EmployeeResolver ]
})
export class EmployeeModule { }
