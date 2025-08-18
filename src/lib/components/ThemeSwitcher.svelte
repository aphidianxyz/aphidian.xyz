<script lang="ts">
    import { darkMode } from "../../routes/darkModeState.svelte";

    const { 
        data,
        margin = '0 0 0 0', 
        iconSize = data.elementSizes.defThemeSwitcherIconWidth
    }:{
        data: any,
        margin?: string,
        iconSize?: string
    } = $props();
    let themeIcon: string = $derived(darkMode.state ? "☀️" : "🌑");

    function switchTheme() {
        darkMode.state = !darkMode.state;
    }
</script>

<style>
    button {
        align-self: flex-end;
        background: none;
        border: none;
    }
</style>

<button
    style:font-size={iconSize}
    style:margin={margin}
    onclick={switchTheme} title="switch themes"
>
    {themeIcon}
</button>
