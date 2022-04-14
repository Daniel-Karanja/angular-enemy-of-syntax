import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCompComponent } from './one-comp.component';

describe('OneCompComponent', () => {
  let component: OneCompComponent;
  let fixture: ComponentFixture<OneCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
