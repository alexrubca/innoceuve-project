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
    this.checkPathname();
  }

  /**
   * checkPathname
   */
  public checkPathname() {
    let path = location.pathname;
    this.activeItem(path);
  }

  /**
   * activeItem
   */
  public activeItem(path?) {
    if (path && path.indexOf('home') > -1 || path === '/') {
      this.home = true;
      this.employee = false;
    } else {
      this.home = false;
      this.employee = true;
    }
  }
}
