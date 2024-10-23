import { DateTimeMixin, IDMixin_ } from "./core";

/** Base school interface */
export interface ISchool extends IDMixin_, DateTimeMixin {
  name: string;
  location: string;
  phone_number: string;
  email: string;
  registration_fee: number;
  updatedAt?: Date; // Optional, can be auto-updated on updates
}

/** Interface for creating a school */
export interface ICreateSchool {
  name: string;
  location: string;
  registrationFee: number;
  updatedAt?: Date; // Optional
}

/** Interface for updating a school */
export interface IUpdateSchool {
  name?: string;
  location?: string;
  registrationFee?: number;
  updatedAt: Date; // Updated automatically during updates
}
