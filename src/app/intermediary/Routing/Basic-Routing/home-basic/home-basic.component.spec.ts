import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBasicComponent } from './home-basic.component';

describe('HomeBasicComponent', () => {
  let component: HomeBasicComponent;
  let fixture: ComponentFixture<HomeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
