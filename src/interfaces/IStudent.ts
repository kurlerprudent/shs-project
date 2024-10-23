import { DateTimeMixin, IDMixin_ } from "./core";

/** Base student interface */
export interface IStudent extends IDMixin_, DateTimeMixin {
  index_number: string;
  name: string;
  dob: Date;
  school_id: string;
  location: string;
  registration_paid: boolean;
}

export interface IStudentWithSchoolData extends IStudent {
  school_name: string;
  school_location: string;
  registration_fee: number;
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
