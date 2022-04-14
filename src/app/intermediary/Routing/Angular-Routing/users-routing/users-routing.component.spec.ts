import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRoutingComponent } from './users-routing.component';

describe('UsersRoutingComponent', () => {
  let component: UsersRoutingComponent;
  let fixture: ComponentFixture<UsersRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
