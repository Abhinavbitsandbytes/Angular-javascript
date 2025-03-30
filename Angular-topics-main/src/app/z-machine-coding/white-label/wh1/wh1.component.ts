import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-wh1',
  templateUrl: './wh1.component.html',
  styleUrls: ['./wh1.component.css']
})
export class Wh1Component implements OnInit {

  items : String[] = [
    "Apple",
    "Oranges",
    "Guava",
    "Grapes",
    "Avacado"
  ]
  suggestions: any = [];
  searchControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(
    debounceTime(1000),
    distinctUntilChanged()
  ).subscribe((res: string)=>{
      this.suggestions = this.filterItem(res);
    })
  }

   filterItem(searchTerm: string){
    if(searchTerm===""){
      return [];
    }

    return this.items.filter((item: String)=>{
      return item.toLowerCase().includes(searchTerm.toLowerCase())
    })

  }

}

