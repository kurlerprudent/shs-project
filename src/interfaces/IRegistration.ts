import { DateTimeMixin, IDMixin_ } from "./core";

export interface IRegistration extends IDMixin_, DateTimeMixin {
  name: string;
  dob: string;
  parent_name: string;
  contact: string;
  email: string;
  aggregate: number;
  jhs_coming_from: string;
  location: string;
  is_applying: boolean;
}
