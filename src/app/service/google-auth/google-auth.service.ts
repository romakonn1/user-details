import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { firstValueFrom, Subject } from "rxjs";
import { UserData } from "../../model/user.model";
import { gapi } from 'gapi-script';
import { Store } from "@ngxs/store";
import { RemoveUser, SaveUser } from "../../state/actions";

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private auth2!: gapi.auth2.GoogleAuth;

  constructor(private store: Store) {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.CLIENT_ID,
        plugin_name: 'employee',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      } as any)
    });
  }

  signIn(formUser: UserData): void {
    this.auth2.signIn()
      .then(googleUser => {
        const mappedUser = this.mapUser(googleUser, formUser);
        this.store.dispatch(new SaveUser(mappedUser));
      });
  }

  signOut(): void {
    this.auth2
      .signOut()
      .then(() => this.store.dispatch(new RemoveUser()))
  }

  private mapUser(user: gapi.auth2.GoogleUser, formUser: UserData): UserData {
    console.warn('formUser', formUser);
    return {
      id: user.getId(),
      name: user.getBasicProfile().getName(),
      email: user.getBasicProfile().getEmail(),
      age: formUser.age,
      address: formUser.address,
      idToken: user.getAuthResponse().id_token,
      accessToken: user.getAuthResponse().access_token,
      expiry: user.getAuthResponse().expires_at
    };
  }
}
