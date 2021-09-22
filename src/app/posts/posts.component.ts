import { Component, OnInit } from '@angular/core';

import { Post } from '../_shared/models';
import { PostService } from '../_shared/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // This is a sample component that performs a GET HTTP request to display data

  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // Start progress indicators here
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, error => {
      // this block gets executed when an error occurs
    });
  }

}
