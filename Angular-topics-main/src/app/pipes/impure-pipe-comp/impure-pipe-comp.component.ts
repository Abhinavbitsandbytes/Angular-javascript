import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impure-pipe-comp',
  templateUrl: './impure-pipe-comp.component.html',
  styleUrls: ['./impure-pipe-comp.component.css']
})
export class ImpurePipeCompComponent implements OnInit {


  nameSearch: any = ''

  productArr: any = [
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

  addProduct(){
    this.productArr.push({
      'sNo': 3,
      'name': 'New',
      price: 777,
      'availability': 'available'
    })
    console.log(this.productArr)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
