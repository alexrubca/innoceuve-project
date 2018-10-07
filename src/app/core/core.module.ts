import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBannerComponent } from './nav-banner/nav-banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ NavBannerComponent ],
  exports: [ NavBannerComponent ]
})
export class CoreModule { }
