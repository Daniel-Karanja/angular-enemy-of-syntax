import { Component } from '@angular/core';

@Component({
  selector: 'inter-polation',
  templateUrl: './inter-polation-component.html',
})
export default class InterpolationComponent {
  name: string = 'Interpolation Component';
  cars = ['Toyota', 'Mazda', 'Bmw'];
  person = { name: 'Angie', age: 23, car: 'Toyota' };
  isRich = true;

  constructor() {
    setTimeout(() => {
      this.name = 'Interpolation Component 2.0.0';
    }, 4000);
  }
}
