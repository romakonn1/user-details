import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserData, UserInfo } from "../../../model/user.model";
import { NgForm } from "@angular/forms";
import { GoogleAuthService } from "../../../service/google-auth/google-auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  user: UserData = {
    age: '',
    address: ''
  }

  constructor(private googleAuthService: GoogleAuthService) { }

  onSubmit(form: NgForm) {
    this.googleAuthService.signIn(form.value);
  }
}
