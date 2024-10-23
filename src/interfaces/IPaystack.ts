import { NetworkProvider } from "@/enums/networkProvider";

export interface IPaystackPromptParams {
  student_name: string;
  school_name: string;
  student_id: string;
  network_provider: NetworkProvider;
  payment_phone_number: string;
  amount: number;
  parent_name: string;
  birth_date: string;
  parent_occupation: string;
  address: string;
  phone_number: string;
  email: string;
}

export interface IChargeResponse {
  status: boolean;
  message: string;
  data?: IChargeResponseData;
}

export interface IChargeResponseData {
  reference: string;
  status: string;
  display_text?: string;
}

export interface IVerifyTransaction {
  status: boolean;
  message: string;
  data: Record<string, unknown>;
}
