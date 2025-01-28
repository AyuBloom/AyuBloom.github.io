<script lang="ts">
    import { onMount } from "svelte";

    interface Star {
        char: string;
        speed: {
            x: number;
            y: number;
        };
        position: {
            x: number;
            y: number;
        };
        angle: number;
    }

    function getRandomArbitrary(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    const starChars: string[] = ["✦", "✧", "★", "☆", "⭑", "⭒"];
    const trail: string = "----";

    const stars: Star[] = $state([]);

    const AMOUNT_OF_STARS: number = 7;
    const FPS = 60;

    onMount(() => {
        for (let i: number = 0; i < AMOUNT_OF_STARS; i++) {
            const star: string = starChars[Math.floor(Math.random() * starChars.length)];

            const speedX = getRandomArbitrary(5, 15);
            const speedY = getRandomArbitrary(5, 15);

            const angle = 2 * Math.PI - Math.atan2(speedY, speedX);
            stars.push({
                char: star,
                speed: {
                    x: speedX,
                    y: speedY,
                },
                position: {
                    x: getRandomArbitrary(
                        window.innerWidth / 2,
                        (window.innerWidth / 2) * 4,
                    ),
                    y: -200,
                },
                angle,
            });
        }

        let fpsInterval: number, now: number, then: number, elapsed: number;

        function startDraw() {
            fpsInterval = 1000 / FPS;
            then = Date.now();
            draw();
        }

        function draw() {
            requestAnimationFrame(draw);

            now = Date.now();
            elapsed = now - then;

            if (elapsed > fpsInterval) {
                then = now - (elapsed % fpsInterval);

                for (const star of stars) {
                    if (star.position.y > (window.innerHeight / 4) * 3) {
                        star.position.x = getRandomArbitrary(
                            window.innerWidth / 2,
                            (window.innerWidth / 2) * 4,
                        );
                        star.position.y = -200;
                        // star.speed = getRandomArbitrary(10, 50);
                    }
                    star.position.x -= star.speed.x;
                    star.position.y += star.speed.y;
                }
            }
        }
        startDraw();
    });
</script>

<div class="absolute w-screen h-3/4 overflow-hidden z-10">
    {#each stars as star}
        <p
            class="absolute whitespace-nowrap select-none text-comment/70 text-3xl"
            style="left: {star.position.x}px;top: {star.position
                .y}px;transform: rotate({star.angle}rad);"
        >
            {star.char}{trail}
        </p>
    {/each}
</div>
