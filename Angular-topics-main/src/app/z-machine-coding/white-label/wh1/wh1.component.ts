import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-wh1',
  templateUrl: './wh1.component.html',
  styleUrls: ['./wh1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Wh1Component  {
temp="hey"

constructor(){
  
}

change(){
this.temp="hello";
}


}

