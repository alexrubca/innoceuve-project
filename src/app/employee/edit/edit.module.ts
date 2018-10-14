import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { SharedModule } from '../../shared/shared.module';
import { UpdateService } from './services/update.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ EditComponent ],
  providers: [ UpdateService ]
})
export class EditModule { }
