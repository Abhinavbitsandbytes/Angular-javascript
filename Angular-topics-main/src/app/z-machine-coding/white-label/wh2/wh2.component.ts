import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-wh2',
  templateUrl: './wh2.component.html',
  styleUrls: ['./wh2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Wh2Component implements DoCheck  {

ngonInit(){

}
ngDoCheck(){
console.log('hey')
}
}
