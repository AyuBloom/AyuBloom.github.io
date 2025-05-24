<script lang="ts">
    const { href, name } = $props();
    import { base } from "$app/paths";
</script>

<li>
    <a
        class="text-accent visited:!text-accent transition duration-300 underline underline-offset-4 hover:text-keyword"
        href="{base}{href}">{name}</a
    >
</li>
