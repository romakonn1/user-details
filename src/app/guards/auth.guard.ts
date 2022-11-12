import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { GoogleAuthService } from "../service/google-auth/google-auth.service";
import { Select, Store } from "@ngxs/store";
import { Navigate } from "@ngxs/router-plugin";
import { UserState } from "../state/state";
import { UserData } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  @Select(UserState) user$!: Observable<UserData>;

  constructor(private store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.user$.pipe(switchMap((user) =>
      user ? of(true) : this.store.dispatch(new Navigate(['/auth']))
    ));
  }
}
