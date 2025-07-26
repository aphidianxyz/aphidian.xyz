<script lang="ts">
    import { darkMode } from "../../routes/darkModeState.svelte";

    let iconSize: string = "calc(1vw + 10px)";
    let themeIcon: string = $derived(darkMode.state ? "☀️" : "🌑");
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
