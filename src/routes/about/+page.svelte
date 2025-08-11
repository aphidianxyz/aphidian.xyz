<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { LayoutProps } from "../../routes/$types";
    import type { NavEntryList } from "../+layout";
    import type { NavEntry } from "../proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';
    let { data }: LayoutProps = $props();

    const ne: NavEntryList = data.navElements;
    const home: NavEntry = ne.home;
    const blog: NavEntry  = ne.blog;
    const projects: NavEntry  = ne.projects;
    const aboutNavEntries: NavEntries = {
        navEntryNames: [home.name, blog.name, projects.name],
        navDest: [home.dest, blog.dest, projects.dest],
        navEmoji: [home.emoji, blog.emoji, projects.emoji],
        navDesc: [home.desc, blog.desc, projects.desc],
    }
</script>

<svelte:head>
    <title>about | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    navEntries={aboutNavEntries}
/>
