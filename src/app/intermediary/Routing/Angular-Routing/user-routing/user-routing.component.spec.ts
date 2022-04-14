import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoutingComponent } from './user-routing.component';

describe('UserRoutingComponent', () => {
  let component: UserRoutingComponent;
  let fixture: ComponentFixture<UserRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
