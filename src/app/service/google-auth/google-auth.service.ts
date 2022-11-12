import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { firstValueFrom, Subject } from "rxjs";
import { HttpService } from "../http/http.service";
import { UserData } from "../../model/user.model";
import { gapi } from 'gapi-script';
import { Store } from "@ngxs/store";
import { RemoveUser, SaveUser } from "../../state/actions";

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private auth2!: gapi.auth2.GoogleAuth;
  private loginStatusChangeSub = new Subject();
  readonly loginStatusChanged$ = this.loginStatusChangeSub.asObservable();

  constructor(
    private store: Store,
    private http: HttpService
  ) {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.CLIENT_ID,
        plugin_name: 'employee',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      } as any)
    });
  }

  async signIn(): Promise<void> {
    const user = await this.auth2.signIn();

    this.getUser(user.getId())
      .then(savedUser =>
        this.store.dispatch(new SaveUser(savedUser)))
      .catch(() => {
        const mappedUser = this.mapUser(user);
        this.http.createUser(mappedUser).subscribe();
        this.store.dispatch(new SaveUser(mappedUser));
      });
  }

  signOut(): void {
    this.auth2.signOut()
      .then(() => {
        this.store.dispatch(new RemoveUser());
        this.loginStatusChangeSub.next(false)
      })
  }

  private getUser(userId: string): Promise<UserData> {
    return firstValueFrom(this.http.getUser(userId));
  }

  private mapUser(user: gapi.auth2.GoogleUser): UserData {
    return {
      id: user.getId(),
      name: user.getBasicProfile().getName(),
      email: user.getBasicProfile().getEmail(),
      idToken: user.getAuthResponse().id_token,
      accessToken: user.getAuthResponse().access_token,
      expiry: user.getAuthResponse().expires_at
    };
  }
}
