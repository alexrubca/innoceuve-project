import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.sass']
})
export class EmployeeFormComponent implements OnInit {
  @Input() config;
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: [this.config.name ? this.config.name : '', Validators.required],
      date: [this.config.date ? this.config.date : '', Validators.required]
    });
  }

  /**
   * undoEmployee
   */
  public undoEmployee() {
    this.employeeForm.reset({
      name: this.config.name ? this.config.name : '',
      date: this.config.date ? this.config.date : ''
    });
  }

  /**
   * onSubmit
   */
  public onSubmit(form) {
    console.log(form);
    this.submitForm.emit(form.value);
  }
}
