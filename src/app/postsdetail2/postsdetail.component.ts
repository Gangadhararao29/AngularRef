import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-postsdetail2',
  templateUrl: './postsdetail.component.html',
  styleUrls: ['./postsdetail.component.css'],
})
export class Postsdetail2Component implements OnInit, OnDestroy {
  post: any;
  subscription: Subscription = new Subscription;
  constructor(private ar: ActivatedRoute, private ps: PostsService) {}

  ngOnInit(): void {
    this.subscription=this.ar.params.subscribe((data) => {
      this.ps.getPostById(data.id).subscribe((obj) => {
        this.post = obj;
      });
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
