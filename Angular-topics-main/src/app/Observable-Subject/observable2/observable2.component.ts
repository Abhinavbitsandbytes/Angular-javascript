import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit {

 observableData1 : any;
 observableData2: any
  subjectData1: any;
  subjectData2: any;

  constructor() { }

  ngOnInit(): void {
  }

  getObservableData(){
    let myObservable = new Observable((observer:any)=>{
      observer.next(Math.floor(Math.random() * 99) + 1);
    })
    myObservable.subscribe((data)=>{
      this.observableData1=data;
    })

    myObservable.subscribe((data)=>{
      this.observableData2=data;
    })
  }

  getSubjectData(){
    let mySubject = new Subject();
    mySubject.subscribe((res:any)=>{
      this.subjectData1=res;
    })
    mySubject.subscribe((res:any)=>{
      this.subjectData2=res;
    })
    mySubject.next((Math.floor(Math.random() * 99) + 1));
  }
}
