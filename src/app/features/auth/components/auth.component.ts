import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserInfo } from "../../../model/user.model";
import { NgForm } from "@angular/forms";
import { FakeHttpService } from "../../../service/fake-http-service";
import { GoogleAuthService } from "../../../service/google-auth/google-auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  index = 0;
  buttonTitle = 'Register';
  user: UserInfo = {
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  constructor(
    private service: FakeHttpService,
    private googleAuthService: GoogleAuthService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    delete form.value.confirmPassword;
    if (this.isSignUp) {
      this.service.signUp(form.value);
    } else {
      this.service.signIn(form.value);
    }
    form.resetForm();
  }

  onIndexChange(index: number) {
    this.index = index;
    this.buttonTitle = index === 0 ? 'Register' : 'Login'
  }

  get isSignUp() {
    return this.index === 0;
  }

  onGoogleSignIn() {
    this.googleAuthService.signIn();
  }
}
