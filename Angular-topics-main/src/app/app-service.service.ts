import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private readonly http: HttpClient) { }

  data1() {
      return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1');
  }
  data2() {
    
      return this.http.get<any>('https://jsonplaceholder.typicode.com/postsu/2');

  }
  data3() {
      return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/3');
  }
}
