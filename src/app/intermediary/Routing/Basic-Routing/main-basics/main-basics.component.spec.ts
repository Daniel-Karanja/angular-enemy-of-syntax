import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBasicsComponent } from './main-basics.component';

describe('MainBasicsComponent', () => {
  let component: MainBasicsComponent;
  let fixture: ComponentFixture<MainBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
