import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCompComponent } from './two-comp.component';

describe('TwoCompComponent', () => {
  let component: TwoCompComponent;
  let fixture: ComponentFixture<TwoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
