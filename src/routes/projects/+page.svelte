<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { LayoutProps } from "../../routes/$types";
    import type { NavEntryList } from "../+layout";
    import type { NavEntry } from "../proxy+layout";

    import TitleBar from '$lib/components/TitleBar.svelte';
    let { data }: LayoutProps = $props();

    const ne: NavEntryList = data.navElements;
    const blog: NavEntry = ne.blog;
    const about: NavEntry = ne.about;
    const projectsNavEntries: NavEntries = {
        navEntryNames: [blog.name, about.name],
        navDest: [blog.dest, about.dest],
        navEmoji: [blog.emoji, about.emoji],
        navDesc: [blog.desc, about.desc],
    }
</script>

<svelte:head>
    <title>projects | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    navEntries={projectsNavEntries}
/>
