import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe-comp',
  templateUrl: './filter-pipe-comp.component.html',
  styleUrls: ['./filter-pipe-comp.component.css']
})
export class FilterPipeCompComponent implements OnInit {

  nameSearch: any = ''

  productArr = [
    {
'sNo': 1,
'name': 'Mobile',
'price': 800,
'availability': 'available'
  },
    {
      'sNo': 2,
      'name': 'Washing Machine',
      'price': 1800,
      'availability': 'Not available'
    },
    {
      'sNo': 3,
      'name': 'Cooler',
      price: 2800,
      'availability': 'available'
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
