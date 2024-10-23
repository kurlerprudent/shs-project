import { IStudentWithSchoolData } from "@/interfaces/IStudent";
import axios from "axios";
import { getApi } from "./core";
type StudentParam = { id: string } | { indexNumber: string };

export const getStudentSchoolData = async (
  param: StudentParam
): Promise<IStudentWithSchoolData> => {
  try {
    const api = getApi();

    const identifier = "id" in param ? param.id : param.indexNumber;

    const response = await api.get<IStudentWithSchoolData>(
      `student/${identifier}/school`
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
