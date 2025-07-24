<script lang="ts">
    import type { LayoutProps } from './$types';
    let { data, children }: LayoutProps = $props();

    import { darkMode } from './darkModeState.svelte'; 
    import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte'
    import Footer from '$lib/components/Footer.svelte';

    let themeSwitcherIconSize: string = "calc(1vw + 10px)";
    let bgColor: string = $state(data.palette.tertiary.light);
    let hyperlinkColor: string = $state(data.palette.secondary.light);
    let themeIcon: string = $state("🌑");
    function switchTheme() {
        darkMode.state = !darkMode.state;
        bgColor = darkMode.state ? data.palette.tertiary.dark : data.palette.tertiary.light;
        hyperlinkColor = darkMode.state ? data.palette.secondary.dark : data.palette.secondary.light;
        themeIcon = darkMode.state ? "☀️" : "🌑";
    }
</script>

<div 
    style:display="flex"
    style:flex-direction="column"
    style:height="100vh"
    style:background-color={bgColor}
>
    <ThemeSwitcher {themeIcon} iconSize={themeSwitcherIconSize} {switchTheme} />
    {@render children()}
    <Footer {hyperlinkColor}/>
</div>

