import type { PageServerLoad } from "./$types";
import { base } from "$app/paths";
import { error } from "@sveltejs/kit";

import blogIds from "$lib/blogs/blogs.json";
const modules = import.meta.glob("$lib/blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const load: PageServerLoad = async ({ fetch, params }) => {
  const blogId = params.id;
  const path = `/src/lib/blogs/${blogId}.md`;

  const isMatched: boolean = Object.hasOwn(blogIds, blogId);
  if (isMatched && modules[path]) {
    const blog = modules[path]; // await fetch(`/src/lib/blogs/${blogId}.md`).then((e) => e.text());
    return { blog };
  } else {
    // throw error(404, "Blog post not found");
  }
};
