<script lang="ts">
    import { base } from "$app/paths";
    import type { PageData } from "./$types";

    const { data }: { data: PageData } = $props();

    const blogPairs = Object.entries(data.blogIndex);
</script>

{#each blogPairs as [path, data]}
    <div class="block rounded-md">
        <a
            href="{base}/blog/{path}"
            class="underline underline-offset-2 text-accent text-3xl mb-1 transition duration-300 visited:text-accent hover:text-keyword"
            >{data.name}</a
        >
        <p class="text-comment text-md">{data.date}</p>
    </div>
{/each}
