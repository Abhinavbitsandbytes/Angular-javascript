import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {

  userName!: string

  constructor(private readonly _subService: SubService) { }

  ngOnInit(): void {
    this._subService.userName.subscribe((name: any)=>{
      this.userName=name
    })
  }

  update(uName: any){
    this._subService.userName.next(uName.value);

  }


}
