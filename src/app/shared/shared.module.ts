import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ TitleComponent, EmployeeFormComponent ],
  exports: [ TitleComponent, EmployeeFormComponent ]
})
export class SharedModule { }
