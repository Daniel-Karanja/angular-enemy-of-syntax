import { Component, OnInit } from '@angular/core';
import users from '../../../../Sample-Data/data';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: [],
})
export class ParentComponentComponent implements OnInit {
  users = users;

  constructor() {}

  ngOnInit(): void {
    console.log(users);
  }

  getUSerName(user: any) {
    return user.login;
  }
  getUserImg(user: any) {
    return user.avatar_url;
  }
}
