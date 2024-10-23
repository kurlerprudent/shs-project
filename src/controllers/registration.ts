import { IRegistration } from "@/interfaces/IRegistration";
import axios from "axios";
import { getApi } from "./core";

export const getRegistrations = async (
  is_applying: boolean = false
): Promise<IRegistration[]> => {
  try {
    const api = getApi();

    const response = await api.get<IRegistration[]>("registration", {
      params: { is_applying },
    });

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
