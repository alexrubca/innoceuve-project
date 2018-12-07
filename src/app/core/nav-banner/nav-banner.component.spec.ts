import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBannerComponent } from './nav-banner.component';

describe('NavBannerComponent', () => {
  let component: NavBannerComponent;
  let fixture: ComponentFixture<NavBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBannerComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBannerComponent);
    component = fixture.componentInstance;
    component.home = false;
    component.employee = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test for activeItem', () => {
    it('set path to /', () => {
      let path = '/';

      component.activeItem(path);

      expect(component.home).toBeTruthy;
      expect(component.employee).toBeFalsy;
    })

    it('set path to /home', () => {
      let path = '/home';

      component.activeItem(path);

      expect(component.home).toBeTruthy;
      expect(component.employee).toBeFalsy;
    })

    it('set path to /employee', () => {
      let path = '/employee';

      component.activeItem(path);

      expect(component.home).toBeFalsy;
      expect(component.employee).toBeTruthy;
    })

    it('set path to home', () => {
      let path = 'home';

      component.activeItem(path);

      expect(component.home).toBeTruthy;
      expect(component.employee).toBeFalsy;
    })

    it('set path to undefined', () => {
      component.activeItem();

      expect(component.home).toBeFalsy;
      expect(component.employee).toBeTruthy;
    })
  })
});
