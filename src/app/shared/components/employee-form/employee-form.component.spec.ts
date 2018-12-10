import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EmployeeFormComponent } from './employee-form.component';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    component.config = {
      button: 'Registrar',
      titleButton: 'Registrar nuevo empleado'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test for undoEmployee', () => {
    it('reset all empty fields to empty', () => {
      component.undoEmployee();

      expect(component.employeeForm.controls.name.value).toEqual('');
      expect(component.employeeForm.controls.date.value).toEqual('');
    })

    it('reset all fields previously filled to empty', () => {
      let name = component.employeeForm.controls.name;
      let date = component.employeeForm.controls.date;
      name.setValue('Alejandro');
      date.setValue('07/12/2018');

      component.undoEmployee();

      expect(name.value).toEqual('');
      expect(date.value).toEqual('');
    })
  })

  describe('test for onSubmit', () => {
    it('emit the form value', () => {
      let data;
      let name = component.employeeForm.controls.name;
      let date = component.employeeForm.controls.date;
      name.setValue('Alejandro');
      date.setValue('07/12/2018');

      component.submitForm.subscribe(value => data = value);
      component.onSubmit(component.employeeForm);

      expect(name.value).toEqual('Alejandro');
      expect(date.value).toEqual('07/12/2018');
    })
  })
});
