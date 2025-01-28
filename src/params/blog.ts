import type { ParamMatcher } from "@sveltejs/kit";
import * as blogIds from "$lib/blogs/blogs.json";

export const match = ((param: string) => {
  const isMatched: boolean = Object.hasOwn(blogIds, param);
  return isMatched;
}) satisfies ParamMatcher;
