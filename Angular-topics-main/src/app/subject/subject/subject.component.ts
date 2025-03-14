import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
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
