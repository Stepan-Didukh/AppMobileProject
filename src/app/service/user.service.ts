import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user"


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(
      private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    console.log('ok');
    return this.http.get<User[]>(this.apiUrl);
  }
}