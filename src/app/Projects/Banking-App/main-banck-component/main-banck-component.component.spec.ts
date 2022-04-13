import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBanckComponentComponent } from './main-banck-component.component';

describe('MainBanckComponentComponent', () => {
  let component: MainBanckComponentComponent;
  let fixture: ComponentFixture<MainBanckComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBanckComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBanckComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
