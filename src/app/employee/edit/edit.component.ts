import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UpdateService } from './services/update.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit, OnDestroy {
  private editEmployee$: Subscription;
  public formConfig;
  public employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private updateSrv: UpdateService
  ) { }

  ngOnInit() {
    this.employee = this.route.snapshot.data.employee;
    this.formConfig = this.getConfig();
  }

  private getConfig() {
    const date = moment(this.employee.birthdate).format('YYYY-MM-DD');
    const config = {
      'button': 'Guardar',
      'titleButton': 'Guardar datos del empleado',
      'name': this.employee.name,
      'date': date
    };

    return config;
  }

  /**
   * editEmployee
   */
  public editEmployee(data) {
    const date = moment(new Date(data.date)).toISOString();
    const updatedObject = {
      name: data.name,
      birthdate: date,
      id: this.employee.id
    };

    this.editEmployee$ = this.updateSrv.updateEmployee(updatedObject).subscribe(response => {
      alert('Los cambios han sido guardados correctamente.');
      this.router.navigateByUrl('/employee');
    });
  }

  ngOnDestroy() {
    if (this.editEmployee$) {
      this.editEmployee$.unsubscribe();
    }
  }
}
