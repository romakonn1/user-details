import { Component } from '@angular/core';
import { Select } from "@ngxs/store";
import { UserState } from "../../../state/state";
import { Observable } from "rxjs";
import { UserData } from "../../../model/user.model";
import { GoogleAuthService } from "../../../service/google-auth/google-auth.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent {
  @Select(UserState) user$!: Observable<UserData>;
  date = new Date();

  constructor(private googleAuthService: GoogleAuthService) { }

  onSignOut(): void {
    this.googleAuthService.signOut();
  }
}
