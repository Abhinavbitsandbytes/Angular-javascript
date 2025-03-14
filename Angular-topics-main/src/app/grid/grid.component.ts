import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  grid: number[][] = [];
    constructor() { }

  ngOnInit(): void {
    this.grid = this.generateGrid(10, 10);
  }

  generateGrid(rows: number, columns: number): number[][] {
    const grid = [];
    let currentNumber = 1;
    let direction = 1;

    for (let i = rows - 1; i >= 0; i--) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        if (direction === 1) {
          row.push(currentNumber);
        } else {
          row.unshift(currentNumber);
        }
        currentNumber++;
      }
      direction = -direction; // Reverse direction for the next row
      grid.push(row);
    }

    return grid;
  }

}
