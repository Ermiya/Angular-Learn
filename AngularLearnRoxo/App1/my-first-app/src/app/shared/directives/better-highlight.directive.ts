import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) {


  }

  ngOnInit() {
    //this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow')

  }

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';


  // @HostListener('mouseenter') mouseenter(eventData: Event) {
  //   // this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
  //   this.backgroundColor = 'yellow';
  // }

  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   //this.render.setStyle(this.elementRef.nativeElement,'backgroundColor','transparent');
  //   this.backgroundColor = 'transparent';

  // }


}
