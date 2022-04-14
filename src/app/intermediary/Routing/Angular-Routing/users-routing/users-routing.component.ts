import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-routing',
  templateUrl: './users-routing.component.html',
  styleUrls: ['./users-routing.component.css'],
})
export class UsersRoutingComponent implements OnInit {
  users: any = [
    { id: 1, name: 'Josphine', age: 23 },
    { id: 2, name: 'John Doe', age: 34 },
    { id: 3, name: 'Elone', age: 564 },
  ];
  constructor(private route: Router) {}

  showSingleUser(no: number) {
    console.log(no);
    this.route.navigate([
      '/users',
      'user',
      this.users[no].id,
      this.users[no].name,
      this.users[no].age,
    ]);
  }

  ngOnInit(): void {}
}
