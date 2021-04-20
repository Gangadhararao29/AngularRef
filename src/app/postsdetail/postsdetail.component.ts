import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-postsdetail',
  templateUrl: './postsdetail.component.html',
  styleUrls: ['./postsdetail.component.css'],
})
export class PostsdetailComponent implements OnInit {
  post: any;
  constructor(private ar: ActivatedRoute, private ps: PostsService) {}

  ngOnInit(): void {
    this.ar.params.subscribe((data) => {
      this.ps.getPostById(data.id).subscribe((obj) => {
        this.post = obj;
      });
    });
  }
}
