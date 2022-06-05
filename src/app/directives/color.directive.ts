import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @Input() appColor = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setStyle(this.appColor);
  }

  private setStyle(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    this.renderer.setStyle(this.el.nativeElement, 'opacity', 0.2);
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
