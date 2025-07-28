<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";

    import TitleBar from '$lib/components/TitleBar.svelte';
    import type { LayoutProps } from "../../routes/$types";
    let { data }: LayoutProps = $props();

    let blogNavEntries: NavEntries = {
        navEntryNames: ["home", "projects", "about"],
        navDest: ["/", "/projects", "/about"],
        navEmoji: ["🏡", "⚗️", "🪲"],
        navDesc: ["homepage", "aphids' projects", "about aphids"]
    }
</script>

<svelte:head>
    <title>blog | aphidian.xyz</title>
</svelte:head>

<TitleBar 
    {data}
    imgWidth="calc(2.5vw + 20px)"
    imgHeight="auto"
    imgMargin="0px 0.5vw 0px 0px"
    borderWidth="3px"
    titleMargin="0.5vh 1vw 0px 0px"
    titleFontSize="calc(2.5vw + 20px)"
    navFontSize="calc(0.75vw + 10px)"
    navEntries={blogNavEntries}
/>
