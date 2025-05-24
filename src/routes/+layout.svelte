<script lang="ts">
    // @ts-nocheck

    import "../app.css";

    import { page } from "$app/state";
    import { onNavigate } from "$app/navigation";

    import Moon from "$lib/Moon.svelte";
    import Stars from "$lib/Stars.svelte";
    import Beach from "$lib/Beach.svelte";
    import TerminalInput from "$lib/TerminalInput.svelte";

    let { children } = $props();

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<svelte:head>
    <title>ayubloom ✧˖° | {page.url.pathname.split("/").at(-1) || "~"}</title>
    <meta
        name="look at em go"
        content="GYZE ITS THE ONE AND ONLY AYUBLOOM'S WEBSITE (NO CAP)"
    />
</svelte:head>

<div class="w-screen h-screen overflow-x-hidden">
    <Moon />
    <Stars />
    <Beach />
    <TerminalInput />

    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-5/6 p-8 rounded-xl bg-foreground/70 overflow-hidden z-20"
    >
        {#if children}
            {@render children()}
        {:else}
            <p>WELCOME TO MY TRAP</p>
        {/if}
    </div>
</div>
