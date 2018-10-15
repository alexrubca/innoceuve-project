import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewService } from './services/new.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit, OnDestroy {
  private createEmployee$: Subscription;
  public formConfig;

  constructor(
    private newSrv: NewService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formConfig = this.getConfig();
  }

  private getConfig() {
    const config = {
      'button': 'Registrar',
      'titleButton': 'Registrar nuevo empleado'
    };

    return config;
  }

  /**
   * createEmployee
   */
  public createEmployee(employee) {
    const date = moment(employee.date).toISOString();
    const objectToSend = {
      name: employee.name,
      birthdate: date,
      id: 0
    };

    this.createEmployee$ = this.newSrv.createEmployee(objectToSend).subscribe(response => {
      alert('El nuevo empleado ha sido registrado con éxito.');
      this.router.navigateByUrl('/employee');
    });
  }

  ngOnDestroy() {
    if (this.createEmployee$) {
      this.createEmployee$.unsubscribe();
    }
  }
}
