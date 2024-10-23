import { DateTimeMixin, IDMixin_ } from "./core";

export interface ICreateUserRole {
  user_id: string;
  role_name: string;
}

export interface IUserRole extends IDMixin_, DateTimeMixin {
  user_id: string;
  role_id: string;
}
