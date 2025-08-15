<script lang="ts">
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    import type { blogEntry } from '../../+layout';
    import type { ColorPalette, ColorHex } from '../../../+layout';

    import { darkMode } from '../../../darkModeState.svelte';

    let { data }: LayoutProps & PageProps = $props();

    // color
    let dark: boolean = $derived(darkMode.state);
    const palette: ColorPalette = data.palette;
    const primaryColor: ColorHex = $derived(dark ? palette.primary.dark : palette.primary.light);
    const entryColor: ColorHex = $derived(dark ? palette.secondary.dark : palette.secondary.light);

    // matches for tags 
    const matches: blogEntry[] = data.matches;
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-family: Alegreya;
        font-size: calc(1vw + 30px);
    }

    nav {
        display: flex;
        flex-direction: column;
        font-family: AlegreyaSans;
        font-size: calc(0.6vw + 10px);
    }

    hr {
        margin-top: 0;
        width: 20%;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>

<main>
    <h1>
        <a
            style:color={primaryColor}
            href="/blog/tags/{data.tagName}"
        >
            {data.tagName}
        </a>
    </h1>
    <hr
        style:color={primaryColor}
    >
    <nav>
        {#each matches as match}
            <a 
                style:color={entryColor}
                href="/blog/{match.slug}"
            >
                {match.title}
            </a>
        {/each}
    </nav>
</main>
