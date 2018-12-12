import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  public query: string;
  public employeeList: Employee[];
  public employeeList$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeSrv: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeList = this.route.snapshot.data.employeeList;
  }

  public editEmployee(id) {
    sessionStorage.setItem('userId', id);
    this.router.navigateByUrl('/employee/edit');
  }

  public removeEmployee(id) {
    this.employeeSrv.removeEmployee(id).subscribe(() => {
      alert('Se ha eliminado el empleado seleccionado.');
      this.employeeList$ = this.employeeSrv.getEmployeesList().subscribe(data => {
        this.employeeList = data;
      });
    });
  }

  ngOnDestroy() {
    if (this.employeeList$) {
      this.employeeList$.unsubscribe();
    }
  }
}
