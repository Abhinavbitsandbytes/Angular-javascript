import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-pagination',
  templateUrl: './parent-pagination.component.html',
  styleUrls: ['./parent-pagination.component.css']
})
export class ParentPaginationComponent implements OnInit {

  allData: any = [];
  pageSize = 10;
  currentPageData: string[] = [];

  constructor(){
    for (let i = 1; i <= 200; i++) {
      this.allData.push(`Item ${i}`);
    }
  }

  ngOnInit(): void {
    this.loadPage(1);
  }

  onPageChange(page: number): void {
    this.loadPage(page);
  }

  private loadPage(page: number): void {
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.currentPageData = this.allData.slice(start, end);
  }

}
