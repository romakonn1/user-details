import { Action, State, StateContext, Store } from "@ngxs/store";
import { UserData } from "../model/user.model";
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
  saveUser(ctx: StateContext<UserData | null>, action: UserData) {
    ctx.patchState({ ...action });
    this.store.dispatch(new Navigate(['/home']))
  }

  @Action(RemoveUser)
  removeUser(ctx: StateContext<UserData | null>) {
    ctx.patchState(null)
  }
}
