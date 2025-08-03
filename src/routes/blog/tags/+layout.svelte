<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import type { LayoutData } from './$types';
    import type { Snippet } from "svelte";
    let { data, children }:
    { 
        data: LayoutData
        children: Snippet 
    } = $props();

    // titlebar
    const ne = data.navElements;
    const home = ne.home;
    const blog = ne.blog;
    const projects = ne.projects;
    const about = ne.about;
    const tagNavEntries: NavEntries = {
        navEntryNames: [home.name, blog.name, projects.name, about.name],
        navDest: [home.dest, blog.dest, projects.dest, about.dest],
        navEmoji: [home.emoji, blog.emoji, projects.emoji, about.emoji],
        navDesc: [home.desc, blog.desc, projects.desc, about.desc],
    }
</script>

<TitleBar 
    {data}
    navEntries={tagNavEntries}
/>

{@render children()}

