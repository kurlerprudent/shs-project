import { DateTimeMixin, IDMixin_ } from "./core";

export enum ResidentialStatusEnum {
  DAY = "day",
  BOARDING = "boarding",
}

/** Base student interface */
export interface IStudent extends IDMixin_, DateTimeMixin {
  index_number: string;
  name: string;
  dob: Date;
  program: string;
  gender: string;
  aggregate: number;
  residential_status: ResidentialStatusEnum;
  registration_id: string;
  school_id: string;
  location: string;
  registration_paid: boolean;
  is_applying: boolean;
}

export interface IStudentWithSchoolData extends IStudent {
  school_name: string;
  school_location: string;
  registration_fee: number;
}

/** Interface for creating a student */
export interface ICreateStudent {
  index_number: string;
  name: string;
  dob: Date;
  program: string;
  gender: string;
  aggregate: number;
  residential_status: ResidentialStatusEnum;
  school_id: string;
  location: string;
  registration_paid?: boolean; // Defaults to false if not provided
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

// REgistraion Form: name, dob, parent_name, contact, email(optional), aggregate, jhs_coming_from, location
