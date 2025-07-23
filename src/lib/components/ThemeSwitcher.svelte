<script lang="ts">
    let { theme_icon, icon_size, switchTheme } = $props()
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
    style:font-size={icon_size}
    onclick={switchTheme} title="switch themes"
>
    {theme_icon}
</button>
