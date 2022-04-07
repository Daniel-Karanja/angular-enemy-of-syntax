import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-parent-componet',
  templateUrl: './the-parent-componet.component.html',
  styleUrls: ['./the-parent-componet.component.css'],
})
export class TheParentComponetComponent implements OnInit {
  cars = ['Probox', 'Audi', 'Lexus'];
  constructor() {}

  ngOnInit(): void {}

  addACar = (car: string) => {
    this.cars.push(car);
  };
}
