import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.sass']
})
export class NavBannerComponent implements OnInit {
  public show: boolean;
  public home: boolean;
  public employee: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('active')) {
      const active = sessionStorage.getItem('active');
      if (active === 'home') {
        this.home = true;
      } else {
        this.employee = true;
      }
    } else {
      this.home = true;
      sessionStorage.setItem('active', 'home');
    }
  }

  /**
   * activeItem
   */
  public activeItem() {
    this.home = !this.home;
    this.employee = !this.employee;

    if (this.home) {
      sessionStorage.setItem('active', 'home');
    } else {
      sessionStorage.setItem('active', 'employee');
    }
  }
}
