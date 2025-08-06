<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import { darkMode } from "../../darkModeState.svelte";
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    let { data }: LayoutProps & PageProps = $props();

    // colors
    let dark: boolean = $derived(darkMode.state);
    let titleFontColor: string = $derived(dark ? data.palette.primary.dark : data.palette.primary.light);
    let fontColor: string = $derived(titleFontColor);
    let linkColor: string = $derived(dark ? data.palette.secondary.dark : data.palette.secondary.light);
    let tagColor: string = $derived(dark ? data.palette.accents.dark : data.palette.accents.light);

    // titlebar
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

    // loads a static html file correlating the blog entry
    let content: string = $state("");
    let contentPromise = loadContent(); 
    async function loadContent(): Promise<void> {
        const response: Response = await fetch(data.contentFile);
        const file = await response.text();
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
        {data.title}
    </h1>
    <h3
        style:color={titleFontColor}
    >
        {data.date}
    </h3>
    {#if data.tags.length > 0}
        <h3
            style:color={titleFontColor}
        >
            tag(s)
        </h3>
        <nav
            style:color={titleFontColor}
        >
            {#each data.tags as tag, i}
                <a 
                    style:color={tagColor}
                    class="tagLink" href="/blog/tags/{tag}"
                >
                    {tag}
                </a>{#if data.tags.length - i > 1},&nbsp;{/if}
            {/each}
        </nav>
        <hr
            style:color={titleFontColor}
        >
    {/if}
    {#await contentPromise then}
        <article
            style:color={fontColor}
            style="--linkColor: {linkColor}"
        >
            {@html content} 
        </article>
    {:catch}
        <article>
            <p>Something happened; please refresh or <a href="/about">contact me</a></p>
        </article>
    {/await}
</div>

<!-- need a page props -->
