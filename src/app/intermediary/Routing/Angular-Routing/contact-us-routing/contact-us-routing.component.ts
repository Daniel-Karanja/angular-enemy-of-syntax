import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-us-routing',
  templateUrl: './contact-us-routing.component.html',
  styleUrls: ['./contact-us-routing.component.css'],
})
export class ContactUsRoutingComponent implements OnInit {
  constructor(private router: Router, private active: ActivatedRoute) {}

  ngOnInit(): void {}

  goToAboutUsPage() {
    // this.router.navigate(['../'], { relativeTo: this.active });
    this.router.navigate(['about']);
  }
}
