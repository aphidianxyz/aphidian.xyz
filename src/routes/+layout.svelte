<script lang="ts">
    import '../app.css';
    import type { LayoutProps } from './$types';
    let { data, children }: LayoutProps = $props();

    import { darkMode } from './darkModeState.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let palette = data.palette;
    let dark = $derived(darkMode.state);
    let bgColor: string = $derived(dark ? palette.tertiary.dark : palette.tertiary.light);
    let footerLinkColor: string = $derived(dark ? palette.accents.dark : palette.accents.light)
</script>

<style>
    :global(body) {
        margin: 0;
    }

    .mainContainer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .childContainer {
        flex: 1;
    }

</style>

<svelte:head>
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="aphidianxyz" />
    <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div 
    class="mainContainer"
    style:background-color={bgColor}
>
    <div class="childContainer">
        {@render children()}
    </div>
    <Footer {footerLinkColor} />
</div>

