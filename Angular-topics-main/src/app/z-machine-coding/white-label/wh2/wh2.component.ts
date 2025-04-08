import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-wh2',
  templateUrl: './wh2.component.html',
  styleUrls: ['./wh2.component.css']
})
export class Wh2Component implements OnInit {
  @Input() data: any
  expanded: any = {};
  constructor() { }
ngOnInit(): void {

  
}

handleFolderClick(folder: any){
  this.expanded[folder]=!this.expanded[folder]

}

}
