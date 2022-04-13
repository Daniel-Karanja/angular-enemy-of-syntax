import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.color = 'white';
  }
}
