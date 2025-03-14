import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent {

  message: string = '';

  constructor(private sharedService: SharedService) {}

  sendMessage() {
    this.sharedService.changeMessage(this.message);
  }

}
