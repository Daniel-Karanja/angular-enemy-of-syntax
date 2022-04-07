import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChildComponentComponent } from './the-child-component.component';

describe('TheChildComponentComponent', () => {
  let component: TheChildComponentComponent;
  let fixture: ComponentFixture<TheChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheChildComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
