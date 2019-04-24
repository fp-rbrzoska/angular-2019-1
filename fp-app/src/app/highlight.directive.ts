import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') appHighlightClass: string;
  @Input() appHighlightBorderColor: string;

  @HostListener('mouseover') mouseOverHandler() {
    if (this.appHighlightClass) {
      this.renderer.addClass(this.el.nativeElement,this.appHighlightClass )
    }
    if(this.appHighlightBorderColor) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid '+ this.appHighlightBorderColor );
    }
  }

  @HostListener('mouseout') mouseOutHandler() {
    if (this.appHighlightClass) {
      this.renderer.removeClass(this.el.nativeElement, this.appHighlightClass)
    }
    if(this.appHighlightBorderColor) {
      this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    }
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  }

}
