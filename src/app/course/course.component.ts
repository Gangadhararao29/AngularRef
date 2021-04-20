import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses = [
    {name:`HTML`, link:'html'}, 
    {name:'CSS' , link:'css'},
     {name:'JAVASCRIPT', link:'javascript'},
     {name:'TYPESCRIPT', link:'typescript'},
     {name:'ANGULAR', link: 'angular' }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
