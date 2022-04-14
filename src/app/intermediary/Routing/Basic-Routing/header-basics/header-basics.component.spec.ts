import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBasicsComponent } from './header-basics.component';

describe('HeaderBasicsComponent', () => {
  let component: HeaderBasicsComponent;
  let fixture: ComponentFixture<HeaderBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
