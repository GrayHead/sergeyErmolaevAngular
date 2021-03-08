import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appSilver]'
})
export class SilverDirective {

  constructor(private elementRef: ElementRef) {
    console.log(elementRef.nativeElement);
  }

  @HostListener('mouseover')
  setSilver(): void {
    this.elementRef.nativeElement.style.background = 'silver';

  }


  @HostListener('mouseleave')
  setOffSilver(): void {
    this.elementRef.nativeElement.style.background = 'white';

  }


}
