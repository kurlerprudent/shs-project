import { DateTimeMixin, IDMixin_ } from "./core";

/** Base school interface */
export interface ISchool extends IDMixin_, DateTimeMixin {
  name: string;
  location: string;
  phone_number: string;
  email: string;
  registration_fee: number;
  school_logo_url: string;
  school_iframe_link: string;
  school_website_link?: string;
  school_motto?: string;
  school_description?: string;
}

/** Interface for creating a school */
export interface ICreateSchool {
  name: string;
  location: string;
  registration_fee: number;
  school_logo_url: string;
  school_iframe_link: string;
  school_website_link?: string;
  school_motto?: string;
  school_description?: string;
}

/** Interface for updating a school */
export interface IUpdateSchool {
  name?: string;
  location?: string;
  registrationFee?: number;
  updatedAt: Date; // Updated automatically during updates
}
