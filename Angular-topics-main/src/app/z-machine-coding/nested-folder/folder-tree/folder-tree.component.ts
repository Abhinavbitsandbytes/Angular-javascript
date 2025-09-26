import { Component, Input, OnInit } from '@angular/core';
import { FileNode } from '../nested-folder-parent/nested-folder-parent.component';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.css']
})
export class FolderTreeComponent implements OnInit {
    dataStatus: any = {};
    @Input() data!: FileNode[];
    constructor() { }
  ngOnInit(): void {
  }
  
  handleClick(id: string){
    this.dataStatus[id]=!this.dataStatus[id];

  }

}
