<script lang="ts">
    import NavLink from "$lib/NavLink.svelte";
</script>

<div>
    <h1 class="text-6xl">
        <span class="text-keyword">Ayu</span><span class="text-accent">Bloom</span>
    </h1>
    <div class="flex flex-col mt-4 text-text text-2xl [&_:is(li)]:mb-2">
        <NavLink href="/about" name="About" />
        <NavLink href="/blog" name="Blogs" />
    </div>
</div>
