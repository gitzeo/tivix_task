import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvxsvcService {
  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  };

  getPostList(): Observable<any>{
    return this.http.get(this.baseUrl+"/api/posts/");
  };
  getPost(postid: number): Observable<any>{
    return this.http.get(this.baseUrl+"/api/posts/"+postid.toString());
  };
  addPost(post: any): Observable<any>{
    return this.http.post(this.baseUrl+"/api/posts/", post);
  };
  savePost(postid: number, post: any): Observable<any>{
    return this.http.put(this.baseUrl+"/api/posts/"+postid.toString(), post);
  };
  delete(postid: number): Observable<any>{
    return this.http.delete(this.baseUrl+"/api/posts/"+postid.toString());
  };
}
