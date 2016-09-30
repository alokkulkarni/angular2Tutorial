import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[apphighlight]'
})
export class HighlightDirective {

  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
    console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }

}
