<script lang="ts">
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    import type { blogEntry } from '../../+layout';
    import type { ColorPalette, ColorHex } from '../../../+layout';
    import type { ElementSizes } from '../../../proxy+layout';

    import { darkMode } from '../../../darkModeState.svelte';

    let { data }: LayoutProps & PageProps = $props();

    // element sizes
    const sizes: ElementSizes = data.elementSizes;

    // color
    let dark: boolean = $derived(darkMode.state);
    const palette: ColorPalette = data.palette;
    const primaryColor: ColorHex = $derived(dark ? palette.primary.dark : palette.primary.light);
    const entryColor: ColorHex = $derived(dark ? palette.secondary.dark : palette.secondary.light);

    // matches for tags 
    const matches: blogEntry[] = data.matches;
</script>

<style>
    main, nav {
        display: flex;
        flex-direction: column;
    }

    main {
        align-items: center;
    }

    h1 {
        font-family: Alegreya;
        font-size: var(--pageTitleFont);
    }

    nav {
        font-family: AlegreyaSans;
    }

    hr {
        margin-top: 0;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>

<main>
    <h1
        style:font-size={sizes.H1Font}
    >
        <a
            style:color={primaryColor}
            href="/blog/tags/{data.tagName}"
        >
            {data.tagName}
        </a>
    </h1>
    <hr
        style:width={sizes.H1Divider}
        style:color={primaryColor}
    >
    <nav
        style:font-size={sizes.blogEntryArticleFont}
    >
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
