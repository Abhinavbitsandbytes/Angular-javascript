import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.css']
})
export class FolderTreeComponent implements OnInit {
  @Input() data: any[] = [];  // Accepts folder structure as input
  expanded: any = {}; // Track expanded folders

  toggle(folderName: string) {
    this.expanded[folderName] = !this.expanded[folderName]; // Toggle open/close
    console.log(this.expanded)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
