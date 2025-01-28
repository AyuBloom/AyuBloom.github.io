<script lang="ts">
    import { onMount } from "svelte";

    interface Tide {
        position: {
            x: number;
            y: number;
        };
    }

    function getRandomArbitrary(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    const AMOUNT_OF_TIDES: number = 10;

    const tides: Tide[] = $state([]);

    onMount(() => {
        for (let i: number = 0; i < AMOUNT_OF_TIDES; i++) {
            tides.push({
                position: {
                    x: getRandomArbitrary(100, window.innerWidth - 50),
                    y: getRandomArbitrary(0, window.innerHeight / 4 - 50),
                },
            });
        }
    });
</script>

<div class="absolute bottom-0 h-1/4 w-full border-t-2 border-keyword">
    {#each tides as tide}
        <p
            class="absolute whitespace-nowrap select-none text-keyword text-3xl"
            style="left: {tide.position.x}px;top: {tide.position.y}px;"
        >
            ~
        </p>
    {/each}
</div>
