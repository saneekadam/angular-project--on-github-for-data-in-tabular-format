import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htttp:HttpClient) {

  }
  getdata()
  {
   let url="https://jsonplaceholder.typicode.com/posts";
   return this.htttp.get(url);
  }
}
