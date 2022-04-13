import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifeCycleCompComponent } from './parent-life-cycle-comp.component';

describe('ParentLifeCycleCompComponent', () => {
  let component: ParentLifeCycleCompComponent;
  let fixture: ComponentFixture<ParentLifeCycleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLifeCycleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLifeCycleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
