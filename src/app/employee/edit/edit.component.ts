import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit, OnDestroy {
  private editEmployee$: Subscription;
  public formConfig;

  constructor( private updateSrv: UpdateService ) { }

  ngOnInit() {
    this.formConfig = this.getConfig();
  }

  private getConfig() {
    const config = {
      'button': 'Guardar',
      'titleButton': 'Guardar datos del empleado'
    };

    return config;
  }

  /**
   * editEmployee
   */
  public editEmployee(data) {
    this.editEmployee$ = this.updateSrv.updateEmployee(data.name, data.date).subscribe(response => {
      console.log(response);
    });
  }

  ngOnDestroy() {
    if (this.editEmployee$) {
      this.editEmployee$.unsubscribe();
    }
  }
}
