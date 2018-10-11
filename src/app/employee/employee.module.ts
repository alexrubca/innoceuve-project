import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeResolver } from './services/employee.resolver';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import { SharedModule } from '../shared/shared.module';
import { NewModule } from './new/new.module';
import { EditModule } from './edit/edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    SharedModule,
    NewModule,
    EditModule
  ],
  declarations: [ EmployeeComponent, SearchPipe ],
  providers: [ EmployeeResolver ]
})
export class EmployeeModule { }
