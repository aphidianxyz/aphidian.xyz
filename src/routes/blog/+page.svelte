<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import { darkMode } from "../darkModeState.svelte";
    import type { LayoutProps } from "./$types"
    let { data }: LayoutProps = $props();

    const ne = data.navElements;
    const home = ne.home;
    const projects = ne.projects;
    const about = ne.about;
    const blogNavEntries: NavEntries = {
        navEntryNames: [home.name, projects.name, about.name],
        navDest: [home.dest, projects.dest, about.dest],
        navEmoji: [home.emoji, projects.emoji, about.emoji],
        navDesc: [home.desc, projects.desc, about.desc],
    }

    const palette = data.palette;
    let dark = $derived(darkMode.state);
    let titleColor: string = $derived(dark ? palette.primary.dark : palette.primary.light);

    // blog entries
    const entries = data.entries;
</script>

<style>
    .mainContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .columnNames {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .columnNames, hr, .blogEntryContainer {
        width: calc(50vw + 200px);
    }

    .pageTitle {
        text-decoration: none;
    }

    .blogEntryContainer {
        display: flex;
        justify-content: space-between;
    }

    h1, h2 {
        font-family: Alegreya;
    }

    h1 {
        margin: 1vh 0 1vh 0;
        font-size: calc(1.5vw + 20px);
    }

    h2 {
        margin: 0 0 0 0;
        font-size: calc(0.65vw + 15px);
        font-weight: normal;
    }
</style>

<svelte:head>
    <title>blog | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    navEntries={blogNavEntries}
/>
<div class="mainContainer">
    <h1>
        <a 
            style:color={titleColor}
            class="pageTitle" href="/blog"
        >
            blog
        </a>
    </h1>
    <div class="columnNames">
        <h2
            style:color={titleColor}
        >article</h2>
        <h2
            style:color={titleColor}
        >tags</h2>
    </div>
    <hr
        style:color={titleColor}
    >
    <nav>
        {#each entries as entry}
            <div class="blogEntryContainer">
                <a href="/blog/{entry.slug}">{entry.title}</a>
                <div class="tagContainer">
                    {#each entry.tags as tag, i}
                        {#if i >= entry.tags.length - 1 }
                            <a href="/blog/tags/{tag}">{tag}</a>  
                        {:else}
                            <a href="/blog/tags/{tag}">{tag}</a>,&nbsp;   
                        {/if}
                    {/each}
                </div>
            </div>    
        {/each}
    </nav>
</div>
