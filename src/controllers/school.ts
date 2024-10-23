import { ISchool } from "@/interfaces/ISchool";
import axios from "axios";
import { getApi } from "./core";

export const getSchoolData = async (id: string): Promise<ISchool> => {
  try {
    const api = getApi();

    const response = await api.get<ISchool>(`schools/${id}`);

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
