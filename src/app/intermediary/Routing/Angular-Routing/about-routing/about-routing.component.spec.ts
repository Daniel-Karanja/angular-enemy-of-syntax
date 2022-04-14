import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRoutingComponent } from './about-routing.component';

describe('AboutRoutingComponent', () => {
  let component: AboutRoutingComponent;
  let fixture: ComponentFixture<AboutRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
