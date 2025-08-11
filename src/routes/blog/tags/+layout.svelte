<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { LayoutData } from './$types';
    import type { Snippet } from "svelte";
    import type { NavEntryList } from "../../+layout";
    import type { NavEntry } from "../../proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';

    let { data, children }:
    { 
        data: LayoutData
        children: Snippet 
    } = $props();

    // titlebar
    const ne: NavEntryList = data.navElements;
    const home: NavEntry = ne.home;
    const blog: NavEntry = ne.blog;
    const projects: NavEntry = ne.projects;
    const about: NavEntry = ne.about;
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

