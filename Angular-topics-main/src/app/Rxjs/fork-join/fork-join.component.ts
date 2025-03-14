import { Component, OnInit } from '@angular/core';
import { catchError, concatMap, forkJoin, of, tap } from 'rxjs';
import { AppServiceService } from '../../app-service.service'
@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {
  constructor(private readonly appServiceService: AppServiceService) { }
  ngOnInit(): void {
    this.errorHandling()
    // this.withoutErrorHandling()
  }

  withoutErrorHandling(){
    forkJoin(
      [this.appServiceService.data1(),
      this.appServiceService.data2(),
      this.appServiceService.data3()
    ])
   .subscribe((data: any)=>{
     console.log(data)
   })
  }

  errorHandling(){
    forkJoin([
      this.appServiceService.data1().pipe(catchError(err => of(null))),  // Handle error by returning a default value (e.g., null)
      this.appServiceService.data2().pipe(catchError(err => of(null))),
      this.appServiceService.data3().pipe(catchError(err => of(null)))
    ])
      .subscribe({
        next: (data: any) => {
          console.log(data);  // This will log an array where failed requests are replaced with `null`
        },
        error: (err) => {
          console.error('An error occurred:', err);  // This won't be called because errors are caught for each observable
        }
      });
  }

  // If any request fails, it will be replaced with null (or any fallback value you choose) instead of stopping the entire flow.
//   The error callback will not be triggered because the errors are caught and handled for each observable individually.
}

