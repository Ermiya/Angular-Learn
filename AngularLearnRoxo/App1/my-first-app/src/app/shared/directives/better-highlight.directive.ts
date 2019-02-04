import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'pink';

  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    //this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow')
    
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;


  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
    this.backgroundColor = this.defaultColor;

  }


}
