import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

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

// -------------------------
// way to pass input color

// import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

// @Directive({
//   selector: '[appMydirective]'
// })
// export class MyDirective implements OnInit {
//   @Input('appMydirective') defaultColor: string = 'yellow'; // Accept input
//   @Input() hoverColor: string = 'green'; // Accept hover color
//   @Input() clickColor: string = 'red'; // Accept click color

//   @HostBinding('style.background') color: string = '';

//   constructor(private element: ElementRef) {}

//   ngOnInit() {
//     this.color = this.defaultColor;
//   }

//   @HostListener('click') onClick() {
//     this.color = this.clickColor;
//   }

//   @HostListener('mouseenter') onEnter() {
//     this.color = this.hoverColor;
//   }

//   @HostListener('mouseleave') onLeave() {
//     this.color = this.defaultColor;
//   }
// }


// -------------------
// html

// <p>dir-component  
//   <span appMydirective="lightblue" hoverColor="orange" clickColor="red">Hover or Click Me!</span>
// </p>
