import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

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
