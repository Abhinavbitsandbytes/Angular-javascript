import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentData = "data from parent";
  count = 6;
  parentData2 = {
    name: 'abhi',
    address: {
      city: 'delhi',
      pin: 1
    }
  }
  constructor() { }
  ngOnInit(): void {
    setInterval(() => {
      this.parentData2.address.pin = 6
    })
  }
}