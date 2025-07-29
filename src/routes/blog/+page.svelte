<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import { darkMode } from "../darkModeState.svelte";
    import type { LayoutProps } from "../../routes/$types";
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

    .columnNames, hr {
        width: calc(50vw + 200px);
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-size: calc(1.5vw + 20px);
        margin: 1vh 0 1vh 0;
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
<div class="mainContainer">
    <h1>
        <a 
            style:color={titleColor}
            href="/blog"
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
</div>
