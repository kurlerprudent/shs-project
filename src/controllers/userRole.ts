import { ICreateUserRole, IUserRole } from "@/interfaces/IUserRole";
import axios from "axios";
import { getApi } from "./core";

export const assignRoleToUser = async (
  formData: ICreateUserRole
): Promise<IUserRole> => {
  try {
    const api = getApi();
    const response = await api.post<IUserRole>("/user_roles/admin", formData);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data ||
          "An error occurred while assigning the role to the user"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

export const getUserRoles = async (
  userId?: string,
  roleId?: string
): Promise<IUserRole[]> => {
  try {
    const api = getApi();
    const response = await api.get<IUserRole[]>("/user_roles/admin", {
      params: {
        user_id: userId,
        role_id: roleId,
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while fetching user roles"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

export const deleteUserRole = async (
  userId: string,
  roleId: string
): Promise<void> => {
  try {
    const api = getApi();
    await api.delete(`/user_roles/admin/${userId}/${roleId}`);

    return;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while deleting the user role"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};
