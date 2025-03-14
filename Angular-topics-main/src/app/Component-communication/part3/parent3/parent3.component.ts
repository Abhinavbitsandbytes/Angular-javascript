import { Component, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  @ViewChild(Child3Component, { static: true }) child!: Child3Component;


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.child.greetingFromChilderen())
  }

}

// In this example, the @ViewChild decorator is used to obtain a reference to the ChildComponent.
// With { static: true }, the reference to the child component is available within the ngOnInit method of the parent component.

// It's worth noting that in Angular version 9 and above, the { static: true } option is the default behavior.
//  If you omit the { static: true } option, the query will behave as if it were set to { static: false }.
//  In this case, the query will be resolved later during the AfterViewInit lifecycle hook instead of ngOnInit.
