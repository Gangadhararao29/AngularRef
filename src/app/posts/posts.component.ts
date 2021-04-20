import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postArray: any = [];
  // postArray = new Array;
  constructor(private ps: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.ps.getPosts().subscribe((data) => {
        this.postArray = data;
      },
      (err) => {
        alert('Something went wrong');
        console.log(err);
      }
    );
  }

  gotoPostDetails(id: number) {
    //navigate to postdetails component
    this.router.navigateByUrl(`/postdetails/${id}`);
  }
}
