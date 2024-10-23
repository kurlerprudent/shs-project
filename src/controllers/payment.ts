import {
  IChargeResponse,
  IPaystackPromptParams,
  IVerifyTransaction,
} from "@/interfaces/IPaystack";
import axios from "axios";
import { getApi } from "./core";

export const createRegistrationPayment = async (
  paymentCreateData: IPaystackPromptParams
): Promise<IChargeResponse> => {
  try {
    const api = getApi();

    const response = await api.post<IChargeResponse>(
      "/paystack/ussd",
      paymentCreateData
    );

    return response.data;
  } catch (error: unknown) {
    console.log("This is the error", error);
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data ||
          "An error occurred during creating the vote payment prompt"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

export const submitOTPPayment = async (
  otp: string,
  reference: string
): Promise<IChargeResponse> => {
  try {
    const api = getApi();

    const response = await api.post<IChargeResponse>("/paystack/ussd/otp", {
      otp,
      reference,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const { data } = error.response;
      if (Array.isArray(data.detail)) {
        // Pydantic error
        const errorMessages = data.detail.map(
          (err: { loc: string[]; msg: string }) => {
            const field = err.loc[err.loc.length - 1];
            return `${field}: ${err.msg}`;
          }
        );
        throw new Error(errorMessages.join(". "));
      } else if (typeof data.detail === "string") {
        throw new Error(data.detail);
      }
    }
    throw new Error("An unexpected error occurred. Please try again.");
  }
};

export const verifyPayment = async (
  reference: string
): Promise<IVerifyTransaction> => {
  try {
    const api = getApi();

    const response = await api.get<IVerifyTransaction>(
      `/paystack/verify/${reference}`
    );
    return response.data;
  } catch (error: unknown) {
    console.error("Error verifying payment:", error);
    throw new Error("An unexpected error occurred. Please try again.");
  }
};
