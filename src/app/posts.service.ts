import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class PostsService {


//Injecting http Client
  constructor(private hc:HttpClient) { }
  
//get all posts
  getPosts():Observable<any>
  {
    return this.hc.get("https://jsonplaceholder.typicode.com/users");
  }

  getPostById(id: number):Observable<any> {
    return this.hc.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
