import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-wh1',
  templateUrl: './wh1.component.html',
  styleUrls: ['./wh1.component.css']
})
export class Wh1Component implements OnInit, OnDestroy {
  searchControl: FormControl = new FormControl();
  unsubscribe$ = new Subject<void>();
  masterList: string[] = ["Apple", "Guava", "oranges", "dragon fruits"];
  filteredList: string[] = [];
  constructor() { 
  }
  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.unsubscribe$)).subscribe((res: any)=>{
      this.filteredList = this.filter(res);
    })
  }
  filter(search: string) : string[]{
    if(search===''){
      return [];
    }
   return  this.masterList.filter((item: string)=> item.toLowerCase().includes(search.toLowerCase()))
  }
  filterTrackby(id: number, item: string){
    return item;
  }
  handleClick(item: string): void{
    this.searchControl.setValue(item);
    this.filteredList=[]
  }
  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }
}

