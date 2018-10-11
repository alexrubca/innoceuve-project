import { Component, OnInit } from '@angular/core';
import { NewService } from './services/new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {
  public formConfig;

  constructor( private newSrv: NewService ) { }

  ngOnInit() {
    this.formConfig = this.getConfig();
  }

  private getConfig() {
    const config = {
      'button': 'Registrar'
    };

    return config;
  }

  /**
   * createEmployee
   */
  public createEmployee(employee) {
    this.newSrv.createEmployee(employee.name, employee.date).subscribe(response => {
      console.log(response);
    });
  }
}
