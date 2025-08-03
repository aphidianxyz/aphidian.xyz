<script lang="ts">
    import { darkMode } from '../../darkModeState.svelte';
    import type { LayoutProps } from './$types';
    let { data }: LayoutProps = $props();

    // colors
    let dark = $derived(darkMode.state);
    const palette = data.palette;
    const titleColor = $derived(dark ? palette.primary.dark : palette.primary.light);
    const tagColor = $derived(dark ? palette.accents.dark : palette.accents.light);

    // tags
    let uniqueTags: string[] = new Array();
    for (var entry of data.entries) {
        for (var tag of entry.tags) {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag);
            }
        }
    }
</script>

<style>
    h1 {
        font-family: Alegreya;
        font-size: calc(1vw + 30px);
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }

    nav { 
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: calc(50vw + 50px);
        font-family: AlegreyaSans;
        font-size: calc(0.6vw + 10px);
        font-weight: bold;
    }
</style>

<div>
    <h1>
        <a 
            style:color={titleColor}
            href="/blog/tags"
        >
            tags
        </a>
    </h1>
    <nav
        style:color={titleColor}
    >
        {#each uniqueTags as tag, i}
            <a
                style:color={tagColor}
                href="/blog/tags/{tag}"
            >
                {tag}
            </a>{#if i < uniqueTags.length - 1},&nbsp;{/if}
        {/each}
    </nav>
</div>
