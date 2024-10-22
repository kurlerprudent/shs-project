import { DateTimeMixin, IDMixin_ } from "./core";

/** Base student interface */
export interface IStudent extends IDMixin_, DateTimeMixin {
  indexNumber: string;
  name: string;
  dob: Date;
  schoolId: string;
  location: string;
  registrationPaid: boolean;
}

/** Interface for creating a student */
export interface ICreateStudent {
  indexNumber: string;
  name: string;
  dob: Date;
  schoolId: string;
  location: string;
  registrationPaid?: boolean; // Defaults to false if not provided
}

/** Interface for updating a student */
export interface IUpdateStudent {
  indexNumber?: string;
  name?: string;
  dob?: Date;
  schoolId?: string;
  location?: string;
  registrationPaid?: boolean;
}
