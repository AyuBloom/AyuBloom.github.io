<script lang="ts">
</script>

<div>
    <h1>About</h1>
    <br />
    <h2>Few facts about me</h2>
    <li><strong>Nationality:</strong> Vietnamese</li>
    <li>
        <strong>Occupation:</strong> 2nd year advanced high school student, majoring in foreign
        linguistics
    </li>
    <li>
        <strong>Interests:</strong> Web development, editing photos & videos, rhythm games
    </li>
    <li>
        <strong>Achievements:</strong> Won several provincial English competitions, none
        in the programming space yet
        <span>(but I&#39;m working on it!)</span>
    </li>
    <br />
    <h2>My (short) story</h2>
    <p>
        This isn't a story, it's more like a timeline, but I think that is just because
        I'm bad at writing stories.
    </p>
    <p>
        I have started learning web development and programming in general since I was in
        8th grade. Back then, I was just making some simple scripts for a small .io game
        called <a href="https://zombs.io" target="_blank">zombs.io</a>, though I learned a
        lot from it!
    </p>
    <p>
        I moved on from making scripts to doing a wide variety of projects when I was in
        1st year of high school. Being in an advanced high school is tough though, I had
        to shift my focus away from this hobby from time to time. Nonetheless, I enjoyed
        making things on the web (and still do!).
    </p>
    <p>
        In 2nd year, I learned some languages other than JavaScript, like C++ and Swift
        just to try my hands on things other than the web, some frameworks too. <span
            >(as you can see, I made this website with SvelteKit!)</span
        >
    </p>
</div>

<style lang="postcss">
    @reference "../../app.css";

    h1 {
        @apply text-5xl text-accent mb-3;
    }

    h2 {
        @apply text-xl text-accent italic mt-1 mb-1;
    }

    p,
    li {
        @apply text-lg text-text mb-2;
    }

    strong {
        @apply font-normal text-keyword;
    }

    span {
        @apply text-lg text-text opacity-50;
    }

    a {
        @apply underline underline-offset-2 text-highlight visited:text-highlight;
    }

    pre {
        @apply bg-comment/50 text-text rounded-md p-4 mt-4 mb-4;
    }
</style>
