import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.sass']
})
export class EmployeeFormComponent implements OnInit {
  @Input() config;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  public employeeForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  /**
   * onSubmit
   */
  public onSubmit(form) {
    console.log(form);
    this.submit.emit(form.value);
  }

  /**
   * onReset
   */
  public onReset() {
    this.reset.emit(true);
  }
}
