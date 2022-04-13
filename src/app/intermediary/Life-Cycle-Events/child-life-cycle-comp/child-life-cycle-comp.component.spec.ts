import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifeCycleCompComponent } from './child-life-cycle-comp.component';

describe('ChildLifeCycleCompComponent', () => {
  let component: ChildLifeCycleCompComponent;
  let fixture: ComponentFixture<ChildLifeCycleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLifeCycleCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLifeCycleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
