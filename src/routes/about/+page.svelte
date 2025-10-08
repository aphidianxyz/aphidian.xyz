<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { LayoutProps } from "../../routes/$types";
    import type { NavEntryList } from "../+layout";
    import type { ColorHex, ColorPalette, ElementSizes, NavEntry } from "../proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import Divider from '$lib/components/Divider.svelte';
    import { darkMode } from "../darkModeState.svelte";
    let { data }: LayoutProps = $props();

    // nav entries
    const ne: NavEntryList = data.navElements;
    const blog: NavEntry  = ne.blog;
    const projects: NavEntry  = ne.projects;
    const aboutNavEntries: NavEntries = {
        navEntryNames: [blog.name, projects.name],
        navDest: [blog.dest, projects.dest],
        navEmoji: [blog.emoji, projects.emoji],
        navDesc: [blog.desc, projects.desc],
    }

    // colors
    const palette: ColorPalette = data.palette;
    const icon: ColorPalette = data.icon;
    let dark: boolean = $derived(darkMode.state);
    let githubIconFile: string = $derived(dark ? icon.github.dark : icon.github.light);
    let fontColor: ColorHex = $derived(dark ? palette.primary.dark : palette.primary.light);
    let linkColor: ColorHex = $derived(dark ? palette.secondary.dark : palette.secondary.light);

    // element sizes
    const sizes: ElementSizes = data.elementSizes;

</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Alegreya;
    }

    h1 {
        font-family: Alegreya;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    p {
        text-align: center;
    }

    p, nav {
        font-family: AlegreyaSans;
    }

</style>

<svelte:head>
    <title>about | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    navEntries={aboutNavEntries}
/>
<main
    style:color={fontColor}
    style:font-size={sizes.aboutBlurbFont}
>
    <h1>
        <a 
            href="/about"
            style:color={fontColor}
            style:font-size={sizes.H1Font}
        >
            about
        </a>
    </h1>
    <Divider 
        width={sizes.H1Divider} 
        color={fontColor} 
    />
    <p>hello, i'm aphids<br>
    programmer & system admin</p>
    <nav>
        <a href="https://github.com/aphidianxyz">
            <img
                style:width={sizes.iconImgWidth}
                src={githubIconFile} alt="github icon"
            >
        </a>
    </nav>
</main>
