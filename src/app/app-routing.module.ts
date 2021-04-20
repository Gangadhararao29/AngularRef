import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BehSubjectComponent } from './beh-subject/beh-subject.component';
import { CourseComponent } from './course/course.component';
import { CsscourseComponent } from './course/csscourse/csscourse.component';
import { HtmlcourseComponent } from './course/htmlcourse/htmlcourse.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { Posts2Component } from './posts2/posts.component';
import { PostsdetailComponent } from './postsdetail/postsdetail.component';
import { Postsdetail2Component } from './postsdetail2/postsdetail.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about" ,component: AboutComponent},
  {path:'form', component: FormComponent},
  {path:"posts", component: PostsComponent},
  {path:"postdetails/:id", component:PostsdetailComponent},
  {path:'course',
   component: CourseComponent,
    children: [
      {path: "html", component:HtmlcourseComponent},
      {path: "css", component:CsscourseComponent}
  ]},
  {path:"posts2", component: Posts2Component },
  {path:"postdetails2/:id", component:Postsdetail2Component},
  {path:'experiment', component: ExperimentComponent},
  {path:'behSubj', component: BehSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
