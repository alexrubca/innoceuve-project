import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComponent ],
      imports: [ SharedModule, HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test for getConfig', () => {
    it('should return the configuration', () => {
      let config = {
        'button': 'Registrar',
        'titleButton': 'Registrar nuevo empleado'
      };
      let result = component.formConfig;

      expect(result).toEqual(config);
    });
  })

  // describe('test for createEmployee', () => {
  //   it('should return the configuration', () => {
  //     let employee = {
  //       name: 'Alejandro',
  //       date: '12-12-2018'
  //     };
  //     let expectedEmployee = { id: 0 };
  //     expectedEmployee = {...employee, ...expectedEmployee};

  //     expect(newEmployee).toEqual(expectedEmployee);
  //   });
  // })
});
