import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-parent',
  templateUrl: './cd-parent.component.html',
  styleUrls: ['./cd-parent.component.css']
})
export class CdParentComponent implements OnInit {

  parentData = {
    name: "abhinav",
    address: {
      permanent: "apail"
    }
  };

  // Change value in the parent
  changeValue() {
    this.parentData.address.permanent='updated' + Math.random()
    // this.parentData={...this.parentData}
  }

  ngOnInit(): void {
  }

}
