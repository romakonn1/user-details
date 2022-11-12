export interface UserInfo {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  address?: string;
  location?: string;
  idToken: string;
  accessToken: string;
  expiry: number;
}

export interface EmployeeDataQuery {
  _page: number;
  _limit: number;
  searchName?: string;
}
