import { Component, OnInit } from '@angular/core';

export interface FileNode {
  name: string;
  type: 'file' | 'folder',
  id?: string,
  children?: FileNode[]
  }

@Component({
  selector: 'app-nested-folder-parent',
  templateUrl: './nested-folder-parent.component.html',
  styleUrls: ['./nested-folder-parent.component.css']
})
export class NestedFolderParentComponent implements OnInit {

    data: FileNode[] = [
      {
        name: "football",
        type: 'folder',
        id: 'folder1',
        children: [
          {
            name: "Messi",
            type: "folder",
            id: "folder2",
            children: [
              {
              name: "goal.txt",
              type: "file"
              }
            ]
          },
          {
            name: "Ronaldo",
            type: "folder",
            id: "folder3",
            children: [
              {
              name: "goal.txt",
              type: "file"
              }
            ]
          }
        ]
      },
      {
        name: 'Man United',
        type: 'folder',
        id: 'folder4',
        children: [{
          name: 'Rooney.txt',
          type: 'file'
        }]
      },
      {
        name: "readMe.txt",
        type: 'file'
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
