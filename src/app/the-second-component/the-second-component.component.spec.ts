import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSecondComponentComponent } from './the-second-component.component';

describe('TheSecondComponentComponent', () => {
  let component: TheSecondComponentComponent;
  let fixture: ComponentFixture<TheSecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheSecondComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
