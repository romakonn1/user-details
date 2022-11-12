import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { UserData } from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<UserData> {
    return this.http.get<UserData>(`${ environment.localHost }/user/${ userId }`);
  }

  createUser(user: UserData): Observable<void> {
    return this.http.post<void>(`${ environment.localHost }/user`, { ...user });
  }
}
