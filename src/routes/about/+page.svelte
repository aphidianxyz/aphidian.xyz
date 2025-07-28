<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import type { LayoutProps } from "../../routes/$types";
    let { data }: LayoutProps = $props();

    const ne = data.navElements;
    const home = ne.home;
    const blog = ne.blog;
    const projects = ne.projects;
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
