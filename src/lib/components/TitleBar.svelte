<script lang="ts">
    import { darkMode } from "../../routes/darkModeState.svelte";
    import '$lib/components/ThemeSwitcher.svelte';
    let { data, imgWidth, imgHeight, imgMargin, borderWidth, titleMargin, fontSize } = $props();

    // components
    import Logo from "./Logo.svelte";
    import Title from "./Title.svelte";

    // colors
    let palette = data.palette;
    let icon = data.icon;
    let dark = $derived(darkMode.state);
    let titleColor: string = $derived(dark ? palette.primary.dark : palette.primary.light);

    // logo
    let logoFile: string = $derived(dark ? icon.dark : icon.light);

</script>

<style>
    .titleAndNav {
        display: flex;
        align-items: center;
        margin-left: 1vw;
    }
    nav {
        display: flex;
    }
</style>

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
        {fontSize} 
        {titleColor}
    />
    <nav>
    </nav>
</div>
