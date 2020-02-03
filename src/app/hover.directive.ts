import { Directive, ElementRef, HostListener } from '@angular/core';
import { Button } from 'protractor';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  button: ElementRef;
  constructor() { }

  
}
