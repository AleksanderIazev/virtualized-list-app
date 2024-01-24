import { maxLenBody } from "../const/maxLenBody";

export const shortText = (body: string) => {
  return body.length > maxLenBody ? body.slice(0, 100) + "..." : body;
};
