import { Component, OnInit } from '@angular/core';
import { concatMap, of, tap } from 'rxjs';
import { AppServiceService } from '../../app-service.service'
@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
  constructor(private readonly appServiceService: AppServiceService) { }
  ngOnInit(): void {
    this.testConcatMap()
  }
  // first data1 api will get called after its success data2 will get called
  // after its success data3. order matters
  testConcatMap(){
    this.appServiceService.data1().pipe(
      tap(res => {
        console.log('first result', res)
      }),
      concatMap(res => this.appServiceService.data2()),
      tap(res => {console.log('second result', res)}),
      concatMap(res => this.appServiceService.data3()),
      tap(res => console.log('third result', res)),
    ).subscribe((res: any) =>{
      console.log('final res', res)
    })
  }
}

//merge map dont preserve order

// Both mergeMap and concatMap propagate errors by default.

// If any inner observable (like an API call) errors out, the entire stream is terminated, and the subscribe block’s error callback is triggered.

// By default, if any inner observable (like an API call) fails inside mergeMap, concatMap, switchMap, or forkJoin, the entire RxJS stream errors out, and control jumps to the .subscribe({ error }) block.
