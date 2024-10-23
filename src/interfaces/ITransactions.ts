import { DateTimeMixin, IDMixin_ } from "./core";

/** Base transaction interface */
export interface ITransaction extends IDMixin_, DateTimeMixin {
  amount: number;
  studentName: string;
  schoolId: string;
  schoolName: string;
  reference: string;
}

/** Interface for creating a transaction */
export interface ICreateTransaction {
  amount: number;
  studentName: string;
  schoolId: string;
  schoolName: string;
  reference: string;
}

/** Interface for updating a transaction */
export interface IUpdateTransaction {
  amount?: number;
  studentName?: string;
  schoolId?: string;
  schoolName?: string;
  reference?: string;
}
