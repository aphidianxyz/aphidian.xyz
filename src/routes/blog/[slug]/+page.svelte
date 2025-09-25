<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    import type { blogEntry } from "../proxy+layout";
    import type { ColorHex, NavEntryList } from "../../+layout";
    import type { ElementSizes, NavEntry } from "../../proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import { darkMode } from "../../darkModeState.svelte";

    let { data }: LayoutProps & PageProps = $props();

    // element sizes
    const sizes: ElementSizes = data.elementSizes;

    // colors
    let dark: boolean = $derived(darkMode.state);
    const palette = data.palette;
    let titleFontColor: ColorHex = $derived(dark ? palette.primary.dark : palette.primary.light);
    let fontColor: ColorHex = $derived(titleFontColor);
    let linkColor: ColorHex = $derived(dark ? palette.secondary.dark : palette.secondary.light);
    let tagColor: ColorHex = $derived(dark ? palette.accents.dark : palette.accents.light);

    // titlebar
    const ne: NavEntryList = data.navElements;
    const blog: NavEntry = ne.blog;
    const projects: NavEntry = ne.projects;
    const about: NavEntry = ne.about;
    const blogNavEntries: NavEntries = {
        navEntryNames: [blog.name, projects.name, about.name],
        navDest: [blog.dest, projects.dest, about.dest],
        navEmoji: [blog.emoji, projects.emoji, about.emoji],
        navDesc: [blog.desc, projects.desc, about.desc],
    }

    // loads a static html file correlating the blog entry
    const entry: blogEntry = data.entry;
    let content: string = $state("");
    const contentPromise = loadContent(); 
    async function loadContent(): Promise<void> {
        const response: Response = await fetch(entry.contentFile);
        const file: string = await response.text();
        content = file;
    }

</script>

<style>
    /* CSS rules for encapsulated blog entry */
    :global(article .imgWithSub), main, nav {
        display: flex;
    }

    h1, :global(article h1, h2, h3, h4, h5, h6) {
        text-align: center;
    }

    :global(article .imgWithSub) {
        flex-direction: column;
        align-items: center;
        gap: var(--imgSubGap);
    }

    :global(article a) {
        color: var(--linkColor);
        text-decoration: none;
    }

    :global(article a:hover) {
        text-decoration: underline;
    }

    :global(article code) {
        font-size: var(--codeFontSize)
    }

    :global(article pre) {
        border-color: var(--codeBorderColor);
        border: var(--preBorder);
    }

    /* CSS rules for base page */
    h1, h3, .tagLink, article, nav {
        margin-bottom: 0;
    }

    h1, h3, hr {
        font-family: Alegreya;
    }

    article, .tagLink {
        font-family: AlegreyaSans;
    }

    main {
        flex-direction: column;
        align-items: center;
    }

    .tagLink {
        text-decoration: none;
        font-weight: bold;
    }

    .tagLink:hover {
        text-decoration: underline;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
    }

</style>

<TitleBar
    {data}
    navEntries={blogNavEntries}
/>
<main>
    <h1
        style:font-size={sizes.H1Font}
        style:color={titleFontColor}
    >
        {entry.title}
    </h1>
    <h3
        style:font-size={sizes.blogEntryArticleFont}
        style:font-family="AlegreyaSans"
        style:color={fontColor}
    >
        {entry.date}
    </h3>
    {#if entry.tags.length > 0}
        <h3
            style:font-family="AlegreyaSans"
            style:font-size={sizes.blogEntryArticleFont}
            style:color={titleFontColor}
        >
            tag(s)
        </h3>
        <nav
            style:width={sizes.blogEntryTagsNav}
            style:font-size={sizes.tagsFont}
            style:color={titleFontColor}
        >
            {#each entry.tags as tag, i}
                <a 
                    style:color={tagColor}
                    class="tagLink" href="/blog/tags/{tag}"
                >
                    {tag}
                </a>{#if entry.tags.length - i > 1},&nbsp;{/if}
            {/each}
        </nav>
    {/if}
    <hr
        style:width={sizes.blogEntryHR}
        style:color={titleFontColor}
    >
    {#await contentPromise then}
        <article
            style:width={sizes.blogEntryArticleEle}
            style:font-size={sizes.blogEntryArticleFont}
            style:color={fontColor}
            style="
                --linkColor: {linkColor};
                --codeBorderColor: {titleFontColor};
                --codeFontSize: {sizes.blogEntryCode};
                --preBorder: {sizes.blogEntryPreBorder};
                --imgSubGap: {sizes.blogEntryImgSubGap};
                "
        >
            {@html content} 
        </article>
    {:catch}
        <article>
            <p>Failed to load article, please try refreshing or <a href="/about">contact me</a></p>
        </article>
    {/await}
    <hr
        style:width={sizes.blogEntryHR}
        style:color={titleFontColor}
    >
</main>
