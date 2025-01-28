import type { PageServerLoad } from "./$types";

import blogIndex from "$lib/blogs/blogs.json";

export const load: PageServerLoad = async ({ fetch }) => {
  // const blogs = await fetch(`/src/lib/blogs/${blogId}.md`).then((e) => e.text());
  return { blogIndex };
};
