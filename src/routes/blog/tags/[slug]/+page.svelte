<script lang="ts">
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    import type { blogEntry } from '../../+layout';
    import type { ColorPalette, ColorHex } from '../../../+layout';
    import type { ElementSizes } from '../../../proxy+layout';

    import Divider from '$lib/components/Divider.svelte';

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
    main, nav, .pageTitle {
        display: flex;
        flex-direction: column;
    }

    main, .pageTitle {
        align-items: center;
    }

    h1 {
        font-family: Alegreya;
    }

    nav {
        font-family: AlegreyaSans;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>

<main>
    <div class="pageTitle">
        <h1>
            <a
                href="/blog/tags/{data.tagName}"
                style:color={primaryColor}
                style:font-size={sizes.H1Font}
            >
                {data.tagName}
            </a>
        </h1>
        <Divider
            width={sizes.H1Divider}
            color={primaryColor}
        />
    </div>
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
