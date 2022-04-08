import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent implements OnInit {
  @Input('shopping_list_items') items: any = [];
  @Output('view-card-comp-delete') deleteItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getItemVar(item: any, str: string) {
    return item[str];
  }

  Item_to_be_deleted(str: string) {
    this.deleteItem.emit(str);
  }
}
