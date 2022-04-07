import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheParentComponetComponent } from './the-parent-componet.component';

describe('TheParentComponetComponent', () => {
  let component: TheParentComponetComponent;
  let fixture: ComponentFixture<TheParentComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheParentComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheParentComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
