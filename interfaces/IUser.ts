import { DateTimeMixin, UserIDModelMixin } from "./core";

/** Base user interface */
export interface IUser extends UserIDModelMixin, DateTimeMixin {
  firstName: string;
  lastName: string;
  email: string;
  roleId: string;
  schoolId?: string; // Optional field
}

/** Interface for creating a user */
export interface ICreateUser extends IUser {
  password: string;
}

/** Interface for updating a user */
export interface IUpdateUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  roleId?: string;
  schoolId?: string;
}

/** Interface for a user in the database */
export interface IUserInDb extends ICreateUser {
  hashedPassword: string; // Database stores the hashed version of the password
}
