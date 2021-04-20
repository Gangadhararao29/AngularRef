import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  number:any;
  constructor(private numberService:NumberService) { }

  iterateNum(){
    this.numberService.getNum().subscribe(numValue=>this.number=numValue);
    this.number++;
    this.numberService.setNum(this.number)
    console.log(this.number)
  }
  ngOnInit(): void {
    this.numberService.getNum().subscribe(numValue=>this.number=numValue);
  }

  
}
