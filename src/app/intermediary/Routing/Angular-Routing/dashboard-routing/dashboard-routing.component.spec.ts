import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRoutingComponent } from './dashboard-routing.component';

describe('DashboardRoutingComponent', () => {
  let component: DashboardRoutingComponent;
  let fixture: ComponentFixture<DashboardRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
