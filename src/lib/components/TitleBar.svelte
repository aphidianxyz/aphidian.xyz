<script lang="ts">
    import type { NavEntries } from "$lib/data-structures/NavEntries.ts";
    import type { ColorPalette } from "../../routes/+layout";

    import { darkMode } from "../../routes/darkModeState.svelte";
    import '$lib/components/ThemeSwitcher.svelte';

    // components
    import Logo from "./Logo.svelte";
    import Title from "./Title.svelte";
    import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";

    const { 
        data,
        imgWidth = "calc(3vw + 20px)", 
        imgHeight = "auto", 
        imgMargin = "0px 0.5vw 0px 0px", 
        borderWidth = "3px", 
        titleMargin = "0 1.25vw 0px 0px", 
        titleFontSize = "calc(2vw + 20px)", 
        navFontSize = "calc(0.75vw + 12.5px)",
        navEntries
    }:{
        data: any 
        imgWidth?: string,
        imgHeight?: string,
        imgMargin?: string,
        borderWidth?: string,
        titleMargin?: string,
        titleFontSize?: string,
        navFontSize?: string,
        navEntries: NavEntries
    }= $props();

    // colors
    const palette: ColorPalette = data.palette;
    const icon: ColorPalette = data.icon;
    let dark: boolean = $derived(darkMode.state);
    let titleColor: string = $derived(dark ? palette.primary.dark : palette.primary.light);
    let hyperlinkColor: string = $derived(dark ? palette.secondary.dark : palette.secondary.light);

    // logo
    let logoFile: string = $derived(dark ? icon.cropped.dark : icon.cropped.light);

    // nav
    const navEntryNames: string[] = navEntries.navEntryNames;
    const navEntryDests: string[] = navEntries.navDest;
    const navEntryEmojis: string[] = navEntries.navEmoji;
    const navEntryDescs: string[] = navEntries.navDesc;

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
        align-self: center;
        font-family: AlegreyaSans;
        gap: 2vw;
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
                    {navEntryEmojis[i]}
                    {navEntryName}
                </a>
            {/each}
        </nav>
    </div>
    <div class="themeSwitcher">
        <ThemeSwitcher margin="0.5vh 0.5vw 0 0"/>
    </div>
</div>
