import axios from "axios";
import { NextRequest } from "next/server";

const createApi = (baseURL: string) =>
  axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

export const clientApi = createApi("/api");

export const getApi = (req?: NextRequest) => {
  if (typeof window === "undefined" && req) {
    // Server-side
    const cookie = req.headers.get("cookie") || "";

    console.log("Server API");
    return axios.create({
      baseURL: process.env.API_BASE_URL,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Cookie: cookie,
      },
    });
  } else {
    // Client-side
    return clientApi;
  }
};
