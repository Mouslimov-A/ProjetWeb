export interface Credential {
  id : string;
  username: string;
  password: string;
  mail: string;
  isAdmin:boolean;
  active: boolean;
  isEmpty: boolean;
  created: Date;
  updated: Date;
}
