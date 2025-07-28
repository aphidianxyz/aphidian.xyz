<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import type { LayoutProps } from "../../routes/$types";
    let { data }: LayoutProps = $props();

    let ne = data.navElements;
    let home = ne.home;
    let blog = ne.blog;
    let about = ne.about;
    let projectsNavEntries: NavEntries = {
        navEntryNames: [home.name, blog.name, about.name],
        navDest: [home.dest, blog.dest, about.dest],
        navEmoji: [home.emoji, blog.emoji, about.emoji],
        navDesc: [home.desc, blog.desc, about.desc],
    }
</script>

<svelte:head>
    <title>projects | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    navEntries={projectsNavEntries}
/>
