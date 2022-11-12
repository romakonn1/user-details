export interface UserInfo {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface UserStateData {
  user: UserData;
}

export interface UserData {
  id?: string;
  name?: string;
  email?: string;
  location?: string;
  idToken?: string;
  accessToken?: string;
  expiry?: number;
  age: string;
  address: string;
}

export interface EmployeeDataQuery {
  _page: number;
  _limit: number;
  searchName?: string;
}
