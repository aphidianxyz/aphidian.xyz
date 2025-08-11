<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    import type { blogEntry } from "../proxy+layout";
    import type { NavEntryList } from "../../+layout";
    import type { NavEntry } from "../../proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import { darkMode } from "../../darkModeState.svelte";

    let { data }: LayoutProps & PageProps = $props();

    // colors
    let dark: boolean = $derived(darkMode.state);
    let palette = data.palette;
    let titleFontColor: string = $derived(dark ? palette.primary.dark : palette.primary.light);
    let fontColor: string = $derived(titleFontColor);
    let linkColor: string = $derived(dark ? palette.secondary.dark : palette.secondary.light);
    let tagColor: string = $derived(dark ? palette.accents.dark : palette.accents.light);

    // titlebar
    const ne: NavEntryList = data.navElements;
    const home: NavEntry = ne.home;
    const blog: NavEntry = ne.blog;
    const projects: NavEntry = ne.projects;
    const about: NavEntry = ne.about;
    const blogNavEntries: NavEntries = {
        navEntryNames: [home.name, blog.name, projects.name, about.name],
        navDest: [home.dest, blog.dest, projects.dest, about.dest],
        navEmoji: [home.emoji, blog.emoji, projects.emoji, about.emoji],
        navDesc: [home.desc, blog.desc, projects.desc, about.desc],
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
    h1 {
        margin-bottom: 0;
        font-size: calc(1vw + 30px);
    }

    h3, .tagLink, article, nav {
        margin-bottom: 0;
        font-size: calc(0.6vw + 10px);
    }

    h1, h3, hr {
        font-family: Alegreya;
    }

    hr {
        width: calc(10% + 20px);
    }

    article {
        font-family: AlegreyaSans;
        width: calc(50vw + 50px);
    }

    :global(article a) {
        color: var(--linkColor);
        text-decoration: none;
    }

    :global(article a:hover) {
        text-decoration: underline;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .tagLink {
        font-family: AlegreyaSans;
        text-decoration: none;
        font-weight: bold;
    }

    .tagLink:hover {
        text-decoration: underline;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: calc(50vw + 50px);
    }

</style>

<TitleBar
    {data}
    navEntries={blogNavEntries}
/>
<div>
    <h1
        style:color={titleFontColor}
    >
        {entry.title}
    </h1>
    {#if entry.tags.length > 0}
        <h3
            style:color={titleFontColor}
        >
            tag(s)
        </h3>
        <nav
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
        <hr
            style:color={titleFontColor}
        >
    {/if}
    <h3
        style:font-family="AlegreyaSans"
        style:color={fontColor}
    >
        {entry.date}
    </h3>
    {#await contentPromise then}
        <article
            style:color={fontColor}
            style="--linkColor: {linkColor}"
        >
            {@html content} 
        </article>
    {:catch}
        <article>
            <p>Failed to load article; please try refreshing or <a href="/about">contact me</a></p>
        </article>
    {/await}
</div>
