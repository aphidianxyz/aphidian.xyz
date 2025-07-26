<script lang="ts">
    let { themeIcon, iconSize } = $props()
    import { darkMode } from "../../routes/darkModeState.svelte";
    function switchTheme() {
        darkMode.state = !darkMode.state;
    }
</script>

<style>
    button {
        align-self: flex-end;
        margin-right: 0.5vw;
        margin-top: 0.5vh;
        background: none;
        border: none;
    }
</style>

<button
    style:font-size={iconSize}
    onclick={switchTheme} title="switch themes"
>
    {themeIcon}
</button>
