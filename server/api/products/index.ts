import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const baseURL = process.env.API_BASE_URL as string;

  const response = await $fetch(baseURL + "/products");
  return response;
});
