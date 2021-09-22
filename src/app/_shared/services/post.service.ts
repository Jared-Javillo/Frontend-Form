import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  createPost(post: Post): Observable<Object> {
    return this.http.post(`${this.baseUrl}/posts`, post);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
}
