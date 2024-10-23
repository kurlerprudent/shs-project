import { DateTimeMixin, IDMixin_ } from "./core";

export interface ICreateRole {
  name: string;
}

export interface IRole extends ICreateRole, IDMixin_, DateTimeMixin {}

export interface IUpdateRole extends ICreateRole {}