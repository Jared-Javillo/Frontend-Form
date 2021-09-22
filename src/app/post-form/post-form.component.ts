import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../_shared/services';
import { Post } from '../_shared/models';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  // This is a sample Form that performs a POST HTTP Request to an API
  // This form also has validations implemented
  @ViewChild('postForm') postForm: NgForm;

  model: Post = {
    id: 0,
    title: '',
    body: ''
  };

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.postForm.invalid) {
      return;
    }

    // Start progress indicators here
    this.postService.createPost(this.model).subscribe(response => {
      // This gets called on a successful request

      // Remove this and replace with a beautiful Toast
      alert('Post successfully created!');

      // Most of the time, use this logging to debug and check things
    }, error => {
      // this gets called when the request fails
    });
  }
}
