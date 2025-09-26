import { ChangeDetectionStrategy, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-child',
  templateUrl: './cd-child.component.html',
  styleUrls: ['./cd-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdChildComponent implements OnInit {

@Input() parentData!: any;
   localState = 0;
ngOnChanges(){
  console.log('changes run');
}
  // Change local state in the child component
  changeLocalState() {
    this.localState = this.localState+1;
  }
  ngOnInit(): void {
    setInterval(()=>{
      this.localState=Math.random()
    },100)
  }

}

// for onpush setInterval is not updating dom
