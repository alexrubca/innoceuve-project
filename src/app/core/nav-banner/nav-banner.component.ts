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
    this.activeItem();
  }

  /**
   * activeItem
   */
  public saveItem(item) {
    if (item === 'home') {
      sessionStorage.setItem('active', 'home');
    } else {
      sessionStorage.setItem('active', 'employee');
    }
    this.activeItem();
  }

  private activeItem() {
    if (sessionStorage.getItem('active')) {
      const active = sessionStorage.getItem('active');
      if (active === 'home') {
        this.home = true;
        this.employee = false;
      } else {
        this.employee = true;
        this.home = false;
      }
    } else {
      this.home = true;
      this.employee = false;
      sessionStorage.setItem('active', 'home');
    }
  }
}
