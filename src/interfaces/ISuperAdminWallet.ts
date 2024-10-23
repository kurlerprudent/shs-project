import { DateTimeMixin, IDMixin_ } from "./core";

/** Base interface for SuperAdmin Wallet */
export interface ISuperAdminWallet extends IDMixin_, DateTimeMixin {
  userId: string;
  currentBalance: number;
  totalEarned: number;
}

/** Interface for creating a SuperAdmin Wallet */
export interface ICreateSuperAdminWallet {
  userId: string;
  currentBalance: number;
  totalEarned: number;
}

/** Interface for updating a SuperAdmin Wallet */
export interface IUpdateSuperAdminWallet {
  currentBalance?: number;
  totalEarned?: number;
}

/** Interface for SuperAdmin Wallet in the database */
export interface ISuperAdminWalletInDb
  extends ICreateSuperAdminWallet,
    IDMixin_,
    DateTimeMixin {
  // Inherits the same fields as the creation model plus mixins
}

/** Interface for public representation of SuperAdmin Wallet */
export interface ISuperAdminWalletPublic extends ISuperAdminWallet {
  // Public wallet has the same fields as the complete wallet representation
}
