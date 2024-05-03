import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userRole: string = 'admin';
  // HTTPClient
  constructor(private http: HttpClient) { }

  // Use promise
  getDataPromise(){
    return fetch("https://jsonplaceholder.typicode.com/users")
  }

  getData(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
