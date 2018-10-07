import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeResolver } from './services/employee.resolver';

const routes: Routes = [
  { path: '', component: EmployeeComponent, resolve: { employeeList: EmployeeResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
