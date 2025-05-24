<script lang="ts">
    import { page } from "$app/state";
    let isBlinkerVisible: boolean = $state(true);

    setInterval(() => {
        isBlinkerVisible = !isBlinkerVisible;
    }, 0.75e3);
</script>

<!-- <div class="flex flex-col"> -->
<div class="absolute top-2 left-2 flex">
    <p class="font-mono text-text text-lg select-none">
        rdm@<span class="text-accent">AyuBloom</span>
        <span class="text-comment">{page.url.pathname.split("/").at(-1) || "~"}</span> %
    </p>
    {#if isBlinkerVisible}
        <div class="w-4 h-6 bg-text ml-2"></div>
    {/if}
</div>
<!-- </div> -->
