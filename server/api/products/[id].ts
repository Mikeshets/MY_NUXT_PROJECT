import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const baseURL = process.env.API_BASE_URL;
  const id = getRouterParam(event, "id");
  const apiURL = `${baseURL}/products/${id}`;
  const method = event.node.req.method;

  let response, body;
  switch (method) {
    case "GET":
      response = await $fetch(apiURL);
      break;
    case "POST":
      body = await readBody(event);
      response = await $fetch(apiURL, {
        method,
        body: JSON.stringify(body),
      });
      break;
    case "PUT":
    case "PATCH":
      body = await readBody(event);
      response = await $fetch(apiURL, {
        method,
        body: JSON.stringify(body),
      });
      break;
    case "DELETE":
      response = await $fetch(apiURL, {
        method,
      });
      break;
    default:
      throw createError({
        statusCode: 405,
        statusMessage: "Method Not Allowed",
      });
  }
  return response;
});
