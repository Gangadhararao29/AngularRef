import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts2',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class Posts2Component implements OnInit, OnDestroy {
  postArray: any = [];
  // postArray = new Array;
  subscription: Subscription = new Subscription;
  constructor(private ps: PostsService, private router: Router) {}

  ngOnInit(): void {
   this.subscription= this.ps.getPosts().subscribe((data) => {
        this.postArray = data;
      },
      (err) => {
        alert('Something went wrong');
        console.log(err);
      }
    );
  }
  

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  gotoPostDetails(id: number) {
    //navigate to postdetails component
    this.router.navigateByUrl(`/postdetails2/${id}`);
  }

}
