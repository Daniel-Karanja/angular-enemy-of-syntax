import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-routing',
  templateUrl: './user-routing.component.html',
  styleUrls: ['./user-routing.component.css'],
})
export class UserRoutingComponent implements OnInit {
  name = 'Joyce';
  id = 2;
  age = 34;
  constructor(private active: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = this.active.snapshot.params['name'];
    this.id = this.active.snapshot.params['id'];
    this.age = this.active.snapshot.params['age'];
  }
}
