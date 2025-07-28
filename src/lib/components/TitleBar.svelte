<script lang="ts">
    import type { LayoutProps } from "../../routes/$types";
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import { darkMode } from "../../routes/darkModeState.svelte";
    import '$lib/components/ThemeSwitcher.svelte';
    let { data, imgWidth, imgHeight, imgMargin, borderWidth, titleMargin, titleFontSize, navFontSize, navEntries }:
    {
        data: any 
        imgWidth: string,
        imgHeight: string,
        imgMargin: string,
        borderWidth: string,
        titleMargin: string,
        titleFontSize: string,
        navFontSize: string,
        navEntries: NavEntries
    }= $props();

    // components
    import Logo from "./Logo.svelte";
    import Title from "./Title.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";

    // colors
    let palette = data.palette;
    let icon = data.icon;
    let dark = $derived(darkMode.state);
    let titleColor: string = $derived(dark ? palette.primary.dark : palette.primary.light);
    let hyperlinkColor: string = $derived(dark ? palette.secondary.dark : palette.secondary.light);

    // logo
    let logoFile: string = $derived(dark ? icon.dark : icon.light);

    // nav
    const navEntryNames = navEntries.navEntryNames;
    const navEntryDests = navEntries.navDest;
    const navEntryEmojis = navEntries.navEmoji;
    const navEntryDescs = navEntries.navDesc;

</script>

<style>
    .mainContainer {
        display: flex;
        justify-content: space-between;
    }

    .titleAndNav {
        display: flex;
        align-items: center;
        margin-left: 1vw;
    }

    nav {
        display: flex;
        align-self: self-end;
        padding-bottom: 1.25vw;
        font-family: AlegreyaSans;
        gap: 1vw;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

</style>

<div class="mainContainer">
    <div class="titleAndNav">
        <Logo 
            {imgWidth}
            {imgHeight}
            margin={imgMargin}
            {borderWidth}
            borderColor={titleColor}
            {logoFile} 
        /> 
        <Title 
            margin={titleMargin}
            fontSize={titleFontSize} 
            {titleColor}
        />
        <nav>
            {#each navEntryNames as navEntryName, i}
                <a 
                    style:color={hyperlinkColor}
                    style:font-size={navFontSize}
                    href="{navEntryDests[i]}" title={navEntryDescs[i]}
                >
                    {navEntryEmojis[i]} {navEntryName}
                </a>
            {/each}
        </nav>
    </div>
    <div class="themeSwitcher">
        <ThemeSwitcher margin="0.5vh 0vw 0 0"/>
    </div>
</div>
