import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app2-child',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() messageEvent = new EventEmitter()
  message="Hello"
  constructor() { }
  ngOnInit(): void {
  }
  handleClick(){
    this.messageEvent.emit(this.message)
  }

}
