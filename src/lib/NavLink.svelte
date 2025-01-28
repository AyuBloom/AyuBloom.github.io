<script lang="ts">
    const { href, name } = $props();
</script>

<li>
    <a
        class="text-accent visited:text-accent transition duration-300 underline underline-offset-4 hover:text-keyword"
        {href}>{name}</a
    >
</li>
