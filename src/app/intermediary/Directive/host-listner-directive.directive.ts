import {
  Directive,
  Renderer2,
  OnInit,
  HostListener,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHostListnerDirective]',
})
export class HostListnerDirectiveDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @Input() hoverColor: string = 'yellow';
  @Input() leaveColor: string = 'transparent';

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.leaveColor
    );
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.hoverColor
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.leaveColor
    );
  }
}
