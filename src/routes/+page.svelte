<script lang="ts">
    import '../app.css';
    import type { LayoutProps } from './$types';
    import { darkMode } from './darkModeState.svelte';
    let { data }: LayoutProps = $props();

    const nav_emojis: string[] = ['📓','⚗️','🪲'];
    const nav_entries: string[] = ['blog', 'projects', 'about'];
    const entry_descs: string[] = ['writings of aphids', 'aphids developed and maintained software', 'about aphids'];

    let titleColor: string = $derived(darkMode.state ? data.palette.primary.dark : data.palette.primary.light);
    let logoSVGFile: string = $derived(darkMode.state ? data.icon.dark : data.icon.light);
    let hyperLinkColor: string = $derived(darkMode.state ? data.palette.secondary.dark : data.palette.secondary.light);
</script>

<style>
    :global(body) {
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        justify-content: center;
        height: calc(90vh + 25px);
    }

    section {
        display: flex;
        align-items: center;
        justify-items: center;
    }

    ul {
        font-family: AlegreyaSans;
        font-weight: normal;
        font-style: normal;
    }

    .site-title {
        font-family: Alegreya;
        font-weight: bold;
        font-size: calc(9vw + 30px);
        margin-left: 1vw; 
    }

    a:link.site-title, a:visited.site-title, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .logo {
        border-style: solid;
        border-radius: 8px;
        border-width: calc(0.25vw + 2px);
        width: 12vw;
        height: auto; 
    }

    nav {
        font-size: calc(1vw + 20px);
    }

</style>

<svelte:head>
    <title>aphidian.xyz</title>
</svelte:head>

<main>
    <section style:margin-bottom="1vh">
        <img 
            style:color={titleColor}
            class="logo" src={logoSVGFile} alt="aphidian logo" 
        >
        <h1>
        <a 
            style:color={titleColor}
            class="site-title" href="/"
        >
            aphidian
        </a>
        </h1>
    </section>
    <nav>
        <ul style:list-style="none">
            {#each nav_entries as entry, i}
                <li>
                    <a 
                        style:color={hyperLinkColor}
                        href="/{entry}"
                        title="{entry_descs[i]}"
                    >
                        {nav_emojis[i]} {entry}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</main>
