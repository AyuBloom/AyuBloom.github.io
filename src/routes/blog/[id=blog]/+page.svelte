<script lang="ts">
    // @ts-nocheck
    import { marked } from "marked";
    // import hljs from "highlight.js";
    import type { PageData } from "./$types";

    const { data }: { data: PageData } = $props();

    const parsed = marked.parse(data.blog);

    // hljs.highlightAll();
</script>

{#await parsed}
    <p>THIS IS MY TRAP CARD</p>
{:then}
    <div>
        {@html parsed}
    </div>
{:catch error}
    <p>IT DIED</p>
{/await}

<style lang="postcss">
    @reference "tailwindcss/theme";

    div :global(h1) {
        @apply text-5xl text-accent mb-3;
    }

    div :global(p) {
        @apply text-lg text-text;
    }

    div :global(strong) {
        @apply font-normal text-keyword;
    }

    div :global(a) {
        @apply underline underline-offset-2 text-highlight visited:text-highlight;
    }

    div :global(pre) {
        @apply bg-comment/50 text-text rounded-md p-4 mt-4 mb-4;
    }
</style>
