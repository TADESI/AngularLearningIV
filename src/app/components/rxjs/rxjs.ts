import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-rxjs',
  styleUrl: './rxjs.css',
  templateUrl: './rxjs.html',
})
export class Rxjs {

  cityList$=of(["Pune","Ngp","Hyd"]);//does the iteration of whole list
  stateList$=from(["Mh","Tn","Gj"])//does the iteration one by one
  myInterval$=interval(2000)//helps to check time for intervals use this it keeps going on
  timer$=timer(5000)//executed only once

  constructor() {
    this.timer$.subscribe((res:number)=>{
      console.log('executed');
    })

    this.myInterval$.subscribe((res:number) => {
      console.log('timer'+ res);
    })

    this.cityList$.subscribe((cityData:string[])=>{
      debugger
      console.log(cityData);
    })

    this.stateList$.subscribe((stateData:string)=>{
      debugger
      console.log(stateData);
    })

    const myObs$=new Observable(value=>{
      value.next("demo");
    })

    myObs$.subscribe(message=>{
      debugger;
      console.log(message);
    })
  }

}
