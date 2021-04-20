import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  num=100;
  private numvalue:BehaviorSubject<any>=new BehaviorSubject(this.num);

  constructor() { }

  getNum(){
    return this.numvalue.asObservable();
  }

  setNum(value){
    // this.num=value;
    this.numvalue.next(value)
    
  }
}