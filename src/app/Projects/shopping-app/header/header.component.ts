import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './../../../app.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() logo = 'Shoping List App';
  @Input() btn1 = 'New Item';
  @Input() btn2 = 'Card';
  @Output() btnPress = new EventEmitter();

  ngOnInit(): void {}

  constructor() {}

  btnPressEvent = (str: string) => {
    this.btnPress.emit(str);
  };
}
