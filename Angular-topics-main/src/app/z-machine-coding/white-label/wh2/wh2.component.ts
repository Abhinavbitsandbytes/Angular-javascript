import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-wh2',
  templateUrl: './wh2.component.html',
  styleUrls: ['./wh2.component.css']
})
export class Wh2Component implements OnInit {

@Input() parentData!: string;
@Output() btnClick = new EventEmitter();
  constructor() { }

ngOnInit(): void {

  
}

handleClick(){
this.btnClick.emit("hello from child")
}
}
