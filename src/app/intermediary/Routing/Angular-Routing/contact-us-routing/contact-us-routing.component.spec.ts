import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsRoutingComponent } from './contact-us-routing.component';

describe('ContactUsRoutingComponent', () => {
  let component: ContactUsRoutingComponent;
  let fixture: ComponentFixture<ContactUsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
