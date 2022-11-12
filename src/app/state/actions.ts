import { UserData } from "../model/user.model";

export class SaveUser {
  static readonly type = '[User] Save User';
  constructor(public user: UserData) { }
}

export class RemoveUser {
  static readonly type = '[User] Remove User';
}
