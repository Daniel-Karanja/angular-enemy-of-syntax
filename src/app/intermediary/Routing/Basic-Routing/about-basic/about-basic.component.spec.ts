import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBasicComponent } from './about-basic.component';

describe('AboutBasicComponent', () => {
  let component: AboutBasicComponent;
  let fixture: ComponentFixture<AboutBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
