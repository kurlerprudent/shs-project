import { ICreateRole, IRole, IUpdateRole } from "@/interfaces/IRole";
import axios from "axios";
import { getApi } from "./core";

export const createRole = async (formData: ICreateRole): Promise<IRole> => {
  try {
    const api = getApi();
    const response = await api.post<IRole>("/roles/admin", formData);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while creating the role"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

export const getRoles = async (): Promise<IRole[]> => {
  try {
    const api = getApi();
    const response = await api.get<IRole[]>("/roles/admin");

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while fetching the roles"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

export const getRole = async (id?: string, name?: string): Promise<IRole> => {
  try {
    const api = getApi();
    const response = await api.get<IRole>("/roles/admin/search", {
      params: {
        id,
        name,
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while fetching the role"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

export const updateRole = async (
  roleId: string,
  roleUpdate: IUpdateRole
): Promise<IRole> => {
  try {
    const api = getApi();
    const response = await api.patch<IRole>(
      `/roles/admin/${roleId}`,
      roleUpdate
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while updating the role"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

export const deleteRole = async (roleId: string): Promise<void> => {
  try {
    const api = getApi();
    await api.delete(`/roles/admin/${roleId}`);

    return;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while deleting the role"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};
