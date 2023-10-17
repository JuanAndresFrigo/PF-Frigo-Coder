import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUppercaseDirective]',
})
export class UppercaseDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    //Para transformar el texto en uppercase y tamaño 20px
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-transform',
      'uppercase'
    );
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }
}
