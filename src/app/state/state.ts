import { Action, State, StateContext, Store } from "@ngxs/store";
import { UserData, UserStateData } from "../model/user.model";
import { Injectable } from "@angular/core";
import { RemoveUser, SaveUser } from "./actions";
import { Navigate } from "@ngxs/router-plugin";

@State<UserData | null>({
  name: 'user',
  defaults: null
})
@Injectable()
export class UserState {

  constructor(private store: Store) {
  }

  @Action(SaveUser)
  saveUser(ctx: StateContext<UserData | null>, action: UserStateData) {
    ctx.setState({ ...action.user });
    this.store.dispatch(new Navigate(['/details']));
  }

  @Action(RemoveUser)
  removeUser(ctx: StateContext<UserData | null>) {
    ctx.setState(null);
    this.store.dispatch(new Navigate(['/auth']));
  }
}
