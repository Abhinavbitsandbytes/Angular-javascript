import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  // constructor(public elementRef: ElementRef) { }

  // ngOnInit(){
  //   this.elementRef.nativeElement.style.background = "green";
  // }

  constructor(private element: ElementRef) {
    console.log(element)
   }

  // to change backgroundcolor by default
  @HostBinding('style.background') color: any

// ----------------------------------------------------------
// to change background color on click
  @HostListener('click') onClick() {
    this.element.nativeElement.style.backgroundColor = "red"

  }
// -----------------------------------------------------------
// To change background color on mouse hover
 
  @HostListener('mouseenter') onEnter() {
    this.element.nativeElement.style.backgroundColor = "green"

  }
  @HostListener('mouseleave') onleave() {
    this.element.nativeElement.style.backgroundColor = "initial"

  }


  ngOnInit() {
    this.color = "yellow";
  }

}
