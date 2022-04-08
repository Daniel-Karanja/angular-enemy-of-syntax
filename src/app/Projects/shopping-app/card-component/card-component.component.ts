import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent implements OnInit {
  @Input('card-img-src') imgSrc =
    'https://m.media-amazon.com/images/I/61M4Lp9mO8L._AC_UY500_.jpg';
  @Input('card-item-name') ItemName = 'Sweat Pants';
  @Input('card-item-no') ItemNo = 0;
  @Output() delete_item = new EventEmitter();
  constructor() {}

  DeleteItem = () => {
    this.delete_item.emit(this.ItemName);
  };

  ngOnInit(): void {}
}
