import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-wh1',
  templateUrl: './wh1.component.html',
  styleUrls: ['./wh1.component.css']
})
export class Wh1Component implements OnInit {
  data = "hello";
  constructor(private readonly http: HttpClient) { }
  ngOnInit(): void {
  }

  childHandler(e: any){
    console.log(e)
  }
}

