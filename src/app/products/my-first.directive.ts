import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyFirst]'
})
// Better to name by its functionality
export class MyFirstDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') color ='grey';

  @HostListener('mouseenter')
  onMouseEnter(){
    this.color = 'yellow'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.color ='grey'
  }
}
