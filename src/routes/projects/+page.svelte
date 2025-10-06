<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { LayoutProps } from "../../routes/$types";
    import type { NavEntryList } from "../+layout";
    import type { ColorHex, ColorPalette, ElementSizes, NavEntry } from "../proxy+layout";
    import type { PageData } from "./$types";
    import type { ProjectEntry } from "./+page";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import { darkMode } from "../darkModeState.svelte";
    let { data }: LayoutProps & PageData = $props();

    // titlebar
    const ne: NavEntryList = data.navElements;
    const blog: NavEntry = ne.blog;
    const about: NavEntry = ne.about;
    const projectsNavEntries: NavEntries = {
        navEntryNames: [blog.name, about.name],
        navDest: [blog.dest, about.dest],
        navEmoji: [blog.emoji, about.emoji],
        navDesc: [blog.desc, about.desc],
    }

    // project entries
    const entries: ProjectEntry[] = data.entries;

    // element sizes
    const sizes: ElementSizes = data.elementSizes;

    // colors
    let dark: boolean = $derived(darkMode.state);
    const palette: ColorPalette = data.palette;
    const fontColor: ColorHex = $derived(dark ? palette.primary.dark : palette.primary.light);
    const linkColor: ColorHex = $derived(dark ? palette.secondary.dark : palette.secondary.light);


</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Alegreya";
    }

    nav, .WIPNotice {
        font-family: AlegreyaSans;
    }

    a:link {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

</style>

<svelte:head>
    <title>projects | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    navEntries={projectsNavEntries}
/>
<main>
    <h1>
        <a
            href="/projects"
            style:color={fontColor}
            style:font-size={sizes.H1Font}
        >
            projects
        </a>
    </h1>
    <hr
        style:color={fontColor}
        style:width={sizes.H1Divider}
    >
    <nav
        style:font-size={sizes.projectEntryFont}
    >
        {#each entries as entry}
            <p>
                <a 
                    style:color={linkColor}
                    href={entry.link}
                >
                    {entry.name}
                </a> - {entry.desc}
            </p>
        {/each}
    </nav>
    <p class="WIPNotice">
        <em>this page is a currently a WIP</em>
    </p>
</main>
