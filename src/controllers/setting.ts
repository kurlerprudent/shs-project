
import axios from "axios";
import { getApi } from "./core";
import { ICreateSettings, ISettings, IUpdateSettings } from "@/interfaces/ISetting";

export const createSettings = async (
  formData: ICreateSettings
): Promise<ISettings> => {
  try {
    const api = getApi();
    const response = await api.post<ISettings>("/settings/admin", formData);

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while creating the setting"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

// Function to fetch all settings (admin only)
export const getSettings = async (): Promise<ISettings[]> => {
  try {
    const api = getApi();
    const response = await api.get<ISettings[]>("/settings/admin");

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while fetching the settings"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

// Function to fetch a specific setting by ID or key (admin only)
export const getSetting = async (
  id?: string,
  key?: string
): Promise<ISettings> => {
  try {
    const api = getApi();
    const response = await api.get<ISettings>("/settings/admin/search", {
      params: {
        id,
        key,
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while fetching the setting"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

// Function to update a setting by key (admin only)
export const updateSetting = async (
  key: string,
  settingsUpdate: IUpdateSettings
): Promise<ISettings> => {
  try {
    const api = getApi();
    const response = await api.patch<ISettings>(
      `/settings/admin/${key}`,
      settingsUpdate
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while updating the setting"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};

// Function to delete a setting by key (admin only)
export const deleteSetting = async (key: string): Promise<void> => {
  try {
    const api = getApi();
    await api.delete(`/settings/admin/${key}`);

    return;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || "An error occurred while deleting the setting"
      );
    }
    console.log(error);
    throw new Error("An unexpected error occurred");
  }
};
