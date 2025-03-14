import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.css']
})
export class TrackbyComponent implements OnInit {
    constructor() { }

  ngOnInit(): void {
  }

  items = [
    { id: 10, name: 'Item 1' },
    { id: 20, name: 'Item 2' },
    { id: 30, name: 'Item 3' }
  ];

  trackById(index: number, item: any): number {
    console.log(item.id)
    return item.id; // Using a unique ID to track each item
  }
}
