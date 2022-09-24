import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  console.log(event);
  console.log("body", event.body);
  return;
};
