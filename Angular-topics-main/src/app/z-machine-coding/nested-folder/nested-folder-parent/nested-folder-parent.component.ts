import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-folder-parent',
  templateUrl: './nested-folder-parent.component.html',
  styleUrls: ['./nested-folder-parent.component.css']
})
export class NestedFolderParentComponent implements OnInit {
  folderStructure = [
    {
      name: 'src',
      type: 'folder',
      children: [
        {
          name: 'app',
          type: 'folder',
          children: [
            { name: 'app.component.ts', type: 'file' },
            { name: 'app.module.ts', type: 'file' }
          ]
        },
        { name: 'index.html', type: 'file' }
      ]
    },
    {
      name: 'assets',
      type: 'folder',
      children: [{ name: 'logo.png', type: 'file' }]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
