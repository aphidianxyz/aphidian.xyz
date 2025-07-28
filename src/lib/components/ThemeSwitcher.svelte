<script lang="ts">
    import { darkMode } from "../../routes/darkModeState.svelte";

    let { 
        margin = '0 0 0 0', 
        iconSize = 'calc(1vw + 10px)'
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
