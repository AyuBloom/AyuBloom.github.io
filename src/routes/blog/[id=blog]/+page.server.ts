import type { PageServerLoad } from "./$types";

import blogIds from "$lib/blogs/blogs.json";

export const load: PageServerLoad = async ({ fetch, params }) => {
  const blogId = params.id;
  const isMatched: boolean = Object.hasOwn(blogIds, blogId);

  if (isMatched) {
    const blog = await fetch(`/src/lib/blogs/${blogId}.md`).then((e) => e.text());
    return { blog };
  }
};
