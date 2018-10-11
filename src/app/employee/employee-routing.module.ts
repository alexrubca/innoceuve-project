import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeResolver } from './services/employee.resolver';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent, resolve: { employeeList: EmployeeResolver} },
  { path: 'new', component: NewComponent },
  { path: 'edit', component: EditComponent, resolve: { employeeList: EmployeeResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
