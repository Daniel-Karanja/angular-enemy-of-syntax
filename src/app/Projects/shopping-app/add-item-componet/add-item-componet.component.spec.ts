import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemComponetComponent } from './add-item-componet.component';

describe('AddItemComponetComponent', () => {
  let component: AddItemComponetComponent;
  let fixture: ComponentFixture<AddItemComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
