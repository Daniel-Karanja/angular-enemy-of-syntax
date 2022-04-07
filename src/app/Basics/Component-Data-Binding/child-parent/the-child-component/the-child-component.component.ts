import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-the-child-component',
  templateUrl: './the-child-component.component.html',
  styleUrls: ['./the-child-component.component.css'],
})
export class TheChildComponentComponent implements OnInit {
  @Output() addCar = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.addCar.emit('Prado');
  }
}
