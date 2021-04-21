import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { FormComponent } from './form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { Posts2Component } from './posts2/posts.component';
import { PostsdetailComponent } from './postsdetail/postsdetail.component';
import { Postsdetail2Component } from './postsdetail2/postsdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { HtmlcourseComponent } from './course/htmlcourse/htmlcourse.component';
import { CsscourseComponent } from './course/csscourse/csscourse.component';
import { BehSubjectComponent } from './beh-subject/beh-subject.component';
import { FirstComponent } from './beh-subject/first/first.component';
import { SecondComponent } from './beh-subject/second/second.component';
import { ThirdComponent } from './beh-subject/third/third.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    FormComponent,
    PostsComponent,
    PostsdetailComponent,
    HtmlcourseComponent,
    CsscourseComponent,
    Posts2Component,
    Postsdetail2Component,
    BehSubjectComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ReactiveformsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
