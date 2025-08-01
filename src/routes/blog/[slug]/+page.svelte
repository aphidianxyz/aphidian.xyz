<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    let { data }: LayoutProps & PageProps = $props();

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


    let content: string = $state("");
    let contentPromise = loadContent(); 
    async function loadContent() {
        // HACK: violating type safety
        const contentFile: string = data.contentFile ? data.contentFile : "";
        const response: Response = await fetch(contentFile);
        const file = await response.text();
        content = file;
    }

</script>

<TitleBar
    {data}
    navEntries={blogNavEntries}
/>
<h1>{data.title}</h1>
{#await contentPromise then}
    <article>{@html content}</article>
{:catch}
    <article>
        <p>Something happened; please refresh or <a href="/about">contact me</a></p>
    </article>
{/await}
