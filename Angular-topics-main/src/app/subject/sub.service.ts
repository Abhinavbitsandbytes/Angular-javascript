import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  userName = new BehaviorSubject('John Doe');

  constructor() { }
}
