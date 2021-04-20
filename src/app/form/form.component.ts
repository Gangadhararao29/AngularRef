import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  selectedCities?: string[];

  tsCities = ['hyderabad', 'warangal', 'karimnagar', 'adilabad', 'siddipet'];
  apCities = ['vizag', 'guntur', 'nellore', 'godavari', 'kakinada'];

  selectApCities() {
    this.selectedCities = this.apCities;
  }
  seletTsCities() {
    this.selectedCities = this.tsCities;
  }

  selectedCourses?: string[];

  HTML = ['Headings(h1)', 'Paragraph(p)', 'Links(a)','main(content)'];
  Bootstrap = ['Container', 'Fluid-Container', 'Card', 'Carousel', 'Accordian'];
  TS = ['Object', 'Class', 'Module', 'Enum'];
  JS = ['public', 'private', 'protected', 'typeof'];

  selectHTML() {
    this.selectedCourses = this.HTML;
  }
  selectBootstrap() {
    this.selectedCourses = this.Bootstrap;
  }
  selectTS() {
    this.selectedCourses = this.TS;
  }
  selectJS() {
    this.selectedCourses = this.JS;
  }

  selectedBranch?: string[];

  MCA = ['a', 'b', 'c', 'd'];
  MBA = ['e', 'f', 'g', 'h'];

  selectBranch1() {
    this.selectedBranch = this.MCA;
  }

  selectBranch2() {
    this.selectedBranch = this.MBA;
  }

  arr1: any = [];
  onClickSubmit(data: any) {
    this.arr1.push(data);
    console.log(data);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
