import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoolFormComponent } from './my-cool-form.component';

describe('MyCoolFormComponent', () => {
  let component: MyCoolFormComponent;
  let fixture: ComponentFixture<MyCoolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoolFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
