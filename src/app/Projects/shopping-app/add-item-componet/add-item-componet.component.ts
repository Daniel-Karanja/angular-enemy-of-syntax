import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item-componet',
  templateUrl: './add-item-componet.component.html',
  styleUrls: [
    './add-item-componet.component.css',
    './../../../app.component.css',
  ],
})
export class AddItemComponetComponent implements OnInit {
  inImgLink = '';
  inItemName = '';

  @Output() newItem = new EventEmitter();

  constructor() {}

  ClearBtn = () => {
    this.inImgLink = '';
    this.inItemName = '';
  };

  SubmitBtn = () => {
    if (this.inImgLink === '' || this.inItemName === '') {
      return;
    }
    this.newItem.emit({ name: this.inItemName, img: this.inImgLink });
  };

  ngOnInit(): void {}
}
