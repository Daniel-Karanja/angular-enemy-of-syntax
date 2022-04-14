import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardRoutingComponent } from './wild-card-routing.component';

describe('WildCardRoutingComponent', () => {
  let component: WildCardRoutingComponent;
  let fixture: ComponentFixture<WildCardRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCardRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
