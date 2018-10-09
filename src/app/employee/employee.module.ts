import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeResolver } from './services/employee.resolver';
import { SearchPipe } from 'src/app/shred/pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [ EmployeeComponent, SearchPipe ],
  providers: [ EmployeeResolver ]
})
export class EmployeeModule { }
