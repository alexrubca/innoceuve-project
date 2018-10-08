import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  public employeeList: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.employeeList = this.route.snapshot.data.employeeList;

    console.log(this.employeeList);
  }
}
