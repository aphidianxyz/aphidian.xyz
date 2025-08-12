<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { ColorPalette, NavEntryList } from "../+layout";
    import type { LayoutProps } from "./$types"
    import type { NavEntry } from "../proxy+layout";
    import type { blogEntry } from "./proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import { darkMode } from "../darkModeState.svelte";

    let { data }: LayoutProps = $props();

    const ne: NavEntryList = data.navElements;
    const projects: NavEntry = ne.projects;
    const about: NavEntry = ne.about;
    const blogNavEntries: NavEntries = {
        navEntryNames: [projects.name, about.name],
        navDest: [projects.dest, about.dest],
        navEmoji: [projects.emoji, about.emoji],
        navDesc: [projects.desc, about.desc],
    }

    const palette: ColorPalette = data.palette;
    let dark: boolean = $derived(darkMode.state);
    let titleColor: string = $derived(dark ? palette.primary.dark : palette.primary.light);
    let blogEntryLinkColor: string = $derived(dark ? palette.secondary.dark : palette.secondary.light);
    let tagLinkColor: string = $derived(dark ? palette.accents.dark : palette.accents.light);

    // blog entries
    const entries: blogEntry[] = data.entries;
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
        width: calc(40vw + 200px);
    }

    .tagContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        width: 40%;
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
        width: 60%;
    }

    .tagLink, h2 {
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
        <h2>
            <a
                style:color={titleColor}
                style:text-decoration="none"
                href="/blog/tags"
            >tags</a>
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
