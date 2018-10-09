import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBannerComponent } from './nav-banner/nav-banner.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ NavBannerComponent, ShellComponent ],
  exports: [ NavBannerComponent, ShellComponent ]
})
export class CoreModule { }
