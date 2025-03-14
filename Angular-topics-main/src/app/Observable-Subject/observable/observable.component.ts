import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  observableData : any;
  subjectData: any;

  constructor() { }

  ngOnInit(): void {
  }

  // https://www.youtube.com/watch?v=Zr3kwMiAfRE&t=5s

  getObservableData(){

    let myObservable = new Observable((observer:any)=>{
      observer.next("Hello from Observer")
    })

    myObservable.subscribe((data)=>{
      this.observableData=data;
    })

  }

  getSubjectData(){

    let mySubject = new Subject();

    mySubject.subscribe((res:any)=>{
      this.subjectData=res;
    })
    mySubject.next("Hello from subject");

  }
}

// consumers (they can receive data) and providers (they can emit data to observers).
// -----------------------------1-------------------------

// Subject is also a type of Observable. 
// Observable - The main difference between Observable and Subject is, in Observable we need a seperate observer
// interface to feed an observable source.
// Subject - Subject implements both the observable and observer interfaces.

// In otherword Subjects can be both consumers and providers but Observables can't be consumer.


// -----------------------------2-------------------------

// Observables are cold. They only emit the data when there is a subscriber.
// getObservableData(){
//   let myObservable = new Observable((observer:any)=>{
//     observer.next("Hello from Observer")
//   })
//   myObservable.subscribe((data)=>{
//     this.observableData=data;
//   })
// }
// in above case on button click there will data because Observable are cold and they only emit data after subscription.




// Subject is hot. It emits the data even when there is no subscriber

// getSubjectData(){
//   let mySubject = new Subject();
//   mySubject.next("Hello from subject");
//   mySubject.subscribe((res:any)=>{
//     this.subjectData=res;
//   })
// }

// in above case on button click there will not be any data because data has already emmited before we subscribe
// so we lost the data.

// below will give data

// getSubjectData(){
//   let mySubject = new Subject();
//   mySubject.subscribe((res:any)=>{
//     this.subjectData=res;
//   })
//   mySubject.next("Hello from subject");

// }

// ---------------------------3---------------------------------------

// Observables are unicast by default. That means each subscribed observer owns an independent execution of
// the observable.

// getObservableData(){
//   let myObservable = new Observable((observer:any)=>{
//     observer.next(Math.floor(Math.random() * 99) + 1);
//   })
//   myObservable.subscribe((data)=>{
//     this.observableData1=data;
//   })

//   myObservable.subscribe((data)=>{
//     this.observableData2=data;
//   })
// }

// You will get different data in observableData1 and observableData2


// Subjects are multi casting. The execution is shared among multiple subscriber.

// getSubjectData(){
//   let mySubject = new Subject();
//   mySubject.subscribe((res:any)=>{
//     this.subjectData1=res;
//   })
//   mySubject.subscribe((res:any)=>{
//     this.subjectData2=res;
//   })
//   mySubject.next((Math.floor(Math.random() * 99) + 1));
// }

// You will get same data in subjectData1 and subjectData2






// -------------------------------------
// The main difference between an Observable and a Subject is:

// Observable: In an observable, you need a separate observer to consume or listen to the data.
//  The observable itself only emits data when someone subscribes to it (an observer).
//  The observable does not directly send data unless triggered by a subscriber.

// Subject: A subject is both an observable (can emit values) and an observer (can consume values).
//  It can both emit values to its subscribers and accept values via .next().


// A Subject can indeed push data using .next(), but it will only emit that data to subscribers
//  once they subscribe. If there are no subscribers, the pushed data won't be consumed by anything.



// ---------------------------------------------------------------
// const observable = new Observable(observer => {
//   observer.next(1); // Emit value 1
//   observer.next(2); // Emit value 2
// });

// observable.subscribe(value => console.log(value)); // Output: 1, 2
//ISN'T OBSERVABLE IS ACTING AS A CONSUMER HERE?

// The Observable itself is not consuming data. Here's why:

//1 - The observer inside the Observable is a subscriber (an object that listens to the Observable).

//2 - The observer.next(1) and observer.next(2) are emitting values to the subscriber. This is the Observable providing data to its subscribers.

//3 - The Observable is not consuming data from an external source. It is simply producing data internally and passing it to the subscriber.


// Key Point:
// Consuming data means receiving data from an external source (e.g., a user input, another Observable, or a function call).

// In the case of an Observable, it cannot be fed data from outside. It only produces data internally and emits it to subscribers.



// const subject = new Subject();

// // Subject consuming data from an external source
// subject.next(1); // Feed data into the Subject
// subject.next(2); // Feed more data

// // Subject providing data to subscribers
// subject.subscribe(value => console.log(value)); // Output: 1, 2

// Here:

// The subject.next(1) is feeding data into the Subject from an external source. This is consuming data.

// The Subject then emits this data to its subscribers. This is providing data.




// -----------------------------------------

// An Observable only emits values based on its internal logic (like data from an http call). it cannot accept external updates after it's created.

// A subject allows you to push new values externally at any time using the next method.






