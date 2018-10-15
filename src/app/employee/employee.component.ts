import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  public query: string;
  public employeeList: Employee[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeSrv: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeList = this.route.snapshot.data.employeeList;
    console.log(this.employeeList);
  }

  public newEmployee() {
    this.router.navigateByUrl('/employee/new');
  }

  public editEmployee(id) {
    sessionStorage.setItem('userId', id);
    this.router.navigateByUrl('/employee/edit');
  }

  public removeEmployee(id) {
    this.employeeSrv.removeEmployee(id).subscribe(response => {
      alert('Se ha eliminado el empleado seleccionado.');
      window.location.reload();
    });
  }
}
