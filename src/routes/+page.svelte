<script lang="ts">
    import Logo from '$lib/components/Logo.svelte';
    import Title from '$lib/components/Title.svelte';
    import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
    import type { LayoutProps } from './$types';
    import { darkMode } from './darkModeState.svelte';
    let { data }: LayoutProps = $props();

    const ne = data.navElements;
    const blog = ne.blog;
    const projects = ne.projects;
    const about = ne.about;
    const nav_emojis: string[] = [blog.emoji, projects.emoji, about.emoji];
    const nav_entries: string[] = [blog.name, projects.name, about.name];
    const entry_descs: string[] = [blog.desc, projects.desc, about.desc];
    const entry_dests: string[] = [blog.dest, projects.dest, about.dest];

    const palette = data.palette;
    const icon = data.icon;
    let dark = $derived(darkMode.state);
    let titleColor: string = $derived(dark ? palette.primary.dark : palette.primary.light);
    let logoFile: string = $derived(dark ? icon.dark : icon.light);
    let hyperLinkColor: string = $derived(dark ? palette.secondary.dark : palette.secondary.light);
</script>

<style>
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

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    nav {
        font-size: calc(1vw + 20px);
    }
</style>

<svelte:head>
    <title>aphidian.xyz</title>
</svelte:head>

<ThemeSwitcher margin="1vh 1vw 0 0"/>
<main>
    <section style:margin-bottom="1vh">
        <Logo 
            imgHeight="auto" 
            imgWidth="12vw"
            borderWidth="calc(0.25vw + 2px)"
            borderColor={titleColor}
            {logoFile}
            margin="0px 1vw 0px 0px"
        />
        <Title
            fontSize="calc(9vw + 30px)"
            {titleColor}
        />
    </section>
    <nav>
        <ul style:list-style="none">
            {#each nav_entries as entry, i}
                <li>
                    <a 
                        style:color={hyperLinkColor}
                        href="{entry_dests[i]}"
                        title="{entry_descs[i]}"
                    >
                        {nav_emojis[i]} {entry}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</main>
