<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { ColorPalette, ColorHex, NavEntryList } from "../+layout";
    import type { LayoutProps } from "./$types"
    import type { ElementSizes, NavEntry } from "../proxy+layout";
    import type { blogEntry } from "./proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import Divider from '$lib/components/Divider.svelte';
    import { darkMode } from "../darkModeState.svelte";

    let { data }: LayoutProps = $props();

    // element sizes
    const sizes: ElementSizes = data.elementSizes;

    // nav entries
    const ne: NavEntryList = data.navElements;
    const tags: NavEntry = ne.tags;
    const projects: NavEntry = ne.projects;
    const about: NavEntry = ne.about;
    const blogNavEntries: NavEntries = {
        navEntryNames: [tags.name, projects.name, about.name],
        navDest: [tags.dest, projects.dest, about.dest],
        navEmoji: [tags.emoji, projects.emoji, about.emoji],
        navDesc: [tags.desc, projects.desc, about.desc],
    }

    // colors
    const palette: ColorPalette = data.palette;
    let dark: boolean = $derived(darkMode.state);
    let titleColor: ColorHex = $derived(dark ? palette.primary.dark : palette.primary.light);
    let blogEntryLinkColor: ColorHex = $derived(dark ? palette.secondary.dark : palette.secondary.light);
    let tagLinkColor: ColorHex = $derived(dark ? palette.accents.dark : palette.accents.light);

    // blog entries
    const entries: blogEntry[] = data.entries;
</script>

<style>
    main, .columnNames, .tagContainer, .blogEntryContainer, .pageTitle {
        display: flex;
    }

    main, .pageTitle {
        flex-direction: column;
        align-items: center;
        font-family: Alegreya;
    }

    .columnNames {
        align-items: center;
        justify-content: space-between;
    }

    .tagContainer {
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 0.25vw;
    }

    .blogEntryLink, .tagLink, .title {
        text-decoration: none;
    }

    .blogEntryLink:hover, .tagLink:hover, .title:hover {
        text-decoration: underline;
    }

    .columnNames, .blogEntryLink, .tagContainer {
        font-family: AlegreyaSans;
    }

    .tagLink, h2 {
        font-weight: bold;
    }

    .blogEntryContainer {
        justify-content: space-between;
        margin-bottom: 2.5vh;
    }

    h2 {
        margin: 0 0 0 0;
    }
</style>

<svelte:head>
    <title>blog | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    navEntries={blogNavEntries}
/>
<main>
    <div class="pageTitle">
        <h1
            style:font-size={sizes.H1Font}
        >
            <a 
                style:color={titleColor}
                class="title" href="/blog"
            >
                blog
            </a>
        </h1>
        <div 
            style:width={sizes.blogHomeWidth}
            class="columnNames"
        >
            <h2
                style:font-size={sizes.blogHomeColumnFont}
                style:color={titleColor}
            >
                article
            </h2>
            <h2>
                <a
                    style:font-size={sizes.blogHomeColumnFont}
                    style:color={titleColor}
                    style:text-decoration="none"
                    href="/blog/tags"
                >
                    tags
                </a>
            </h2>
        </div>
        <Divider 
            width={sizes.blogHomeWidth} 
            color={titleColor} 
        />
    </div>
    <nav>
        {#each entries as entry}
            <div 
                style:width={sizes.blogHomeWidth}
                class="blogEntryContainer"
            >
                <!-- Extra div encapsulation is for making the actual
                clickable area of the link only the text itself-->
                <div class="blogEntry">
                    <a 
                        style:font-size={sizes.blogHomeEntryFont}
                        style:color={blogEntryLinkColor}
                        class="blogEntryLink" 
                        href="/blog/{entry.slug}"
                    >
                        {entry.title}
                    </a>
                </div>
                <div 
                    class="tagContainer"
                    style:color={titleColor}
                >
                    {#each entry.tags as tag, i}
                        <!-- Extra encapsulation so that the comma stays
                        with the tag on wrap -->
                        <div 
                            style:font-size={sizes.blogHomeTagFont}
                            class="tag"
                        >
                            <a 
                                style:color={tagLinkColor}
                                class="tagLink"
                                href="/blog/tags/{tag}"
                            >
                                {tag}
                            </a>{#if entry.tags.length - 1 > i},&nbsp;{/if}
                        </div>
                    {/each}
                </div>
            </div>    
        {/each}
    </nav>
</main>
