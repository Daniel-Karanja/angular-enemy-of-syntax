import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountComponentComponent } from './new-account-component.component';

describe('NewAccountComponentComponent', () => {
  let component: NewAccountComponentComponent;
  let fixture: ComponentFixture<NewAccountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAccountComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
