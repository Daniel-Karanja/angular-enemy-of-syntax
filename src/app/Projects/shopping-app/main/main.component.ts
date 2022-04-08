import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './../../../app.component.css'],
})
export class MainComponent implements OnInit {
  card = 'card';
  cardBool = true;
  showAddItem = false;
  items = [
    {
      name: 'sweat pants',
      img: 'https://m.media-amazon.com/images/I/61M4Lp9mO8L._AC_UY500_.jpg',
    },

    {
      name: 'Addidas Shorts',
      img: 'https://m.media-amazon.com/images/I/91jHXRtOCtL._AC_UL320_.jpg',
    },
  ];

  constructor() {}

  headerBtnClick(str: String) {
    console.log(str);
    if (str === 'btn1') {
      this.showAddItem = !this.showAddItem;
      return;
    }
  }

  AddNewShoppingItem = (obj: any) => {
    console.log(obj);
    this.items.push(obj);
  };

  DeleteItem = (str: string) => {
    console.log(str);

    let Newitems = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name !== str) {
        Newitems.push(this.items[i]);
      }
    }
    this.items = Newitems;
  };

  ngOnInit(): void {}
}
