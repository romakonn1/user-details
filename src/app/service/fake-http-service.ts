import { Injectable } from '@angular/core';
import { delay, EMPTY, Observable, of } from "rxjs";
import { UserInfo } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  users: UserInfo[] = [];

  constructor() { }

  signUp(user: UserInfo): Observable<void> {
    this.users.push(user);
    return EMPTY.pipe(delay(3000));
  }

  signIn(user: UserInfo): Observable<void> {
    const userFound = this.users.find(u => user.username === u.username && user.password === u.password)

    if (!userFound) {
      throw new Error('User not found');
    }

    return EMPTY.pipe(delay(3000));
  }
}
