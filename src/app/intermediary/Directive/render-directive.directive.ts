import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRenderDirective]',
})
export class RenderDirectiveDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'blue');
  }
}
