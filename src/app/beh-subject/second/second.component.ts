import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

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
