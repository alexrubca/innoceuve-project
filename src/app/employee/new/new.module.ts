import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new.component';
import { SharedModule } from '../../shared/shared.module';
import { NewService } from './services/new.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ NewComponent ],
  providers: [ NewService ]
})
export class NewModule { }
