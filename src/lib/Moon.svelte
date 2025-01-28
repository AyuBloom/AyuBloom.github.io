<!--
<div
    class="absolute -top-24 -right-24 w-96 h-96 transition rounded-full bg-comment z-0"
></div>
-->

<script lang="ts">
    function drawMoon(
        radius: number,
        lineWidth: number,
        xScale: number,
    ): Array<string>[] {
        const lines: Array<string>[] = [];
        const hUnitsPerChar: number = 1 / xScale;
        const hChars: number = (2 * radius + lineWidth) / hUnitsPerChar;
        const vChars: number = 2 * radius + lineWidth;
        let dist;
        const _lineWidth: number = lineWidth / 2;
        const center: number = radius + _lineWidth;

        for (let j: number = 0; j < vChars; j++) {
            const charArray: string[] = [];
            const y: number = j + 0.5;
            for (let i: number = 0; i < hChars; i++) {
                const x: number = (i + 0.5) * hUnitsPerChar;
                dist = Math.sqrt(
                    (x - center) * (x - center) + (y - center) * (y - center),
                );
                if (dist <= radius + _lineWidth) {
                    charArray.push("*");
                } else {
                    charArray.push(" ");
                }
            }
            // charArray.push("\n");
            lines.push(charArray);
        }
        console.log(lines);
        return lines;
    }
</script>

<div class="font-mono text-xl text-text -top-24 -right-24 absolute w-96 h-96">
    {#each drawMoon(8, 1, 2) as line}
        <p class="-mt-1">
            {#each line as character}
                <strong class="whitespace-pre">{character}</strong>
            {/each}
        </p>
    {/each}
</div>

<style lang="postcss">
</style>
