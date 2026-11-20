import { Component, inject } from '@angular/core';
import { filter, from, map, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  imports: [],
  selector: 'app-rxjs-operator',
  styleUrl: './rxjs-operator.css',
  templateUrl: './rxjs-operator.html',
})
export class RxjsOperator {
  noList$ = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  rollNoList$ = of([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  http= inject(HttpClient)
  constructor() {
    this.http.get("https://jsonplaceholder.typicode.com/users").
    subscribe((res)=> {
        console.log(res)
      }
    )
    // this.noList$.subscribe((res:number)=>{
    //   console.log(res);
    // })Always remember to use pipe when using operators
    // this.noList$.pipe(filter((num) => num % 2 == 0)).subscribe((res: number) => {
    //   console.log(res);
    // });
    this.rollNoList$.pipe(
      map((result)=>result.filter(m=>m%2==0))
    ).subscribe((result)=>{console.log(result)})
  }
}
