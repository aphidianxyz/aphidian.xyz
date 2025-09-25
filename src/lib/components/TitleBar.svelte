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
        imgWidth = data.elementSizes.defTitleIconWidth,
        imgHeight = data.elementSizes.defTitleIconHeight,
        imgMargin = data.elementSizes.defTitleIconMargin,
        borderWidth = data.elementSizes.defTitleIconBorderWidth,
        titleMargin = data.elementSizes.defTitleTitleMargin,
        titleFontSize = data.elementSizes.defTitleTitleFont,
        navFontSize = data.elementSizes.defTitleNavFont,
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
    .titleBar, .titleAndNav, nav {
        display: flex;
    }

    .titleBar {
        justify-content: space-between;
    }

    .titleAndNav {
        align-items: center;
        margin-top: 1vh;
        margin-left: 1vw;
    }

    .themeSwitcher {
        position: fixed;
        right: 0vw;
        align-self: flex-start;
    }

    nav {
        align-self: center;
        font-family: AlegreyaSans;
        margin-top: 1vh;
        gap: 2vw;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

</style>

<div class="titleBar">
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
        <nav
            style:font-size={navFontSize}
        >
            {#each navEntryNames as navEntryName, i}
                <a 
                    style:color={hyperlinkColor}
                    href="{navEntryDests[i]}" title={navEntryDescs[i]}
                >
                    {navEntryEmojis[i]} {navEntryName}
                </a>
            {/each}
        </nav>
    </div>
    <div class="themeSwitcher">
        <ThemeSwitcher {data} />
    </div>
</div>
