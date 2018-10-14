import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewService } from './services/new.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit, OnDestroy {
  private createEmployee$: Subscription;
  public formConfig;

  constructor( private newSrv: NewService ) { }

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
    this.createEmployee$ = this.newSrv.createEmployee(employee.name, employee.date).subscribe(response => {
      console.log(response);
    });
  }

  ngOnDestroy() {
    if (this.createEmployee$) {
      this.createEmployee$.unsubscribe();
    }
  }
}
