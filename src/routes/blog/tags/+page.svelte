<script lang="ts">
    import type { ColorPalette, ColorHex } from '../../+layout';
    import type { LayoutProps } from './$types';
    import type { ElementSizes } from '../../proxy+layout';

    import { darkMode } from '../../darkModeState.svelte';

    import Divider from '$lib/components/Divider.svelte';

    let { data }: LayoutProps = $props();

    // element sizes
    const sizes: ElementSizes = data.elementSizes;

    // colors
    let dark: boolean = $derived(darkMode.state);
    const palette: ColorPalette = data.palette;
    const titleColor: ColorHex = $derived(dark ? palette.primary.dark : palette.primary.light);
    const tagColor: ColorHex = $derived(dark ? palette.accents.dark : palette.accents.light);

    // tags
    let uniqueTags: string[] = new Array();
    for (var entry of data.entries) {
        for (var tag of entry.tags) {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag);
            }
        }
    }
</script>

<style>
    main, nav, .pageTitle  {
        display: flex;
        font-family: Alegreya;
    }

    a {
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }

    main, .pageTitle {
        flex-direction: column;
        align-items: center;
        align-content: center;
    }

    nav { 
        flex-wrap: wrap;
        justify-content: center;
        font-family: AlegreyaSans;
    }

</style>

<main>
    <div class="pageTitle">
        <h1
        >
            <a 
                style:font-size={sizes.H1Font}
                style:color={titleColor}
                href="/blog/tags"
            >
                tags
            </a>
        </h1>
        <Divider 
            width={sizes.H1Divider} 
            color={titleColor} 
        />
    </div>
    <nav
        style:width={sizes.tagsHomeNavEle}
        style:font-size={sizes.tagsFont}
        style:color={titleColor}
    >
        {#each uniqueTags as tag, i}
            <a
                style:color={tagColor}
                href="/blog/tags/{tag}"
            >
                {tag}
            </a>{#if i < uniqueTags.length - 1},&nbsp;{/if}
        {/each}
    </nav>
</main>
