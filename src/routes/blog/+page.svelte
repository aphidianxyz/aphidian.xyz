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
    let blogEntryLinkColor: string = $derived(dark ? palette.secondary.dark : palette.secondary.light);
    let tagLinkColor: string = $derived(dark ? palette.accents.dark : palette.accents.light);

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

    .tagContainer {
        text-align: end;
        justify-content: end;
        width: 30%;
        gap: 0.25vw;
    }

    .blogEntryLink, .tagLink, .pageTitle {
        text-decoration: none;
    }

    .blogEntryLink:hover, .tagLink:hover, .pageTitle:hover {
        text-decoration: underline;
    }

    .blogEntryLink, .tagContainer {
        font-family: AlegreyaSans;
        font-size: calc(0.6vw + 15px);
    }

    .blogEntryLink { 
        width: 70%;
    }

    .tagLink {
        font-weight: bold;
    }

    .blogEntryContainer {
        display: flex;
        justify-content: space-between;
        gap: 10vw;
        margin-bottom: 15px;
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
        >
            article
        </h2>
        <h2
            style:color={titleColor}
        >
            tags
        </h2>
    </div>
    <hr
        style:color={titleColor}
    >
    <nav>
        {#each entries as entry}
            <div class="blogEntryContainer">
                <!-- HACK: The extra encapsulation is because we set width on 
                blogEntryContainer, we don't actually want the clickable link
                to be that wide-->
                <div>
                    <a style:color={blogEntryLinkColor} class="blogEntryLink" href="/blog/{entry.slug}">{entry.title}</a>
                </div>
                <div class="tagContainer"
                    style:color={titleColor}
                >
                    {#each entry.tags as tag, i}
                        <a style:color={tagLinkColor} class="tagLink" href="/blog/tags/{tag}">
                            {tag}
                        </a>{#if entry.tags.length - 1 > i},&nbsp;{/if}
                    {/each}
                </div>
            </div>    
        {/each}
    </nav>
</div>
