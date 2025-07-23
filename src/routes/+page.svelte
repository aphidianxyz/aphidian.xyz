<script lang="ts">
    import '../app.css';
    import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
    import Footer from '$lib/components/Footer.svelte';

    const nav_font_size: string = 'calc(1vw + 20px)'
    const nav_emojis: string[] = ['📓','⚗️','🪲'];
    const nav_entries: string[] = ['blog', 'projects', 'about'];
    const entry_descs: string[] = ['writings of aphids', 'aphids developed and maintained software', 'about aphids'];
    let dark_mode: boolean = $state(false);

    let bg_color: string = $state("#F5EDD1");
    let body_text_color: string = $state("#1E2A18");
    let theme_icon: string = $state("🌑");
    let hyperlink_color: string = $state("#5B741B");
    let logo_svg: string = $state("aphid-icon-light.svg");
    function switchTheme() {
        dark_mode = !dark_mode;
        bg_color = dark_mode ?  "#1E2A18" : "#F5EDD1";
        body_text_color = dark_mode ? "#F5EDD1" : "#1E2A18";
        hyperlink_color = dark_mode ? "#89955B" : "#5B741B";
        logo_svg = dark_mode ? "aphid-icon-dark.svg" : "aphid-icon-light.svg";
        theme_icon = dark_mode ? "☀️" : "🌑";
    }
</script>

<style>
    :global(body) {
        margin: 0;
    }

    .mainContainer {
        display: flex;
        flex-direction: column;
        height: 100vh;
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

<div class="mainContainer" style:background-color={bg_color}>
    <ThemeSwitcher {theme_icon} icon_size={nav_font_size} {switchTheme} />
    <main>
        <section style:margin-bottom="1vh">
            <img 
                style:color={body_text_color}
                class="logo" src={logo_svg} alt="aphidian logo" 
            >
            <h1>
            <a 
                style:color={body_text_color}
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
                            style:color={hyperlink_color}
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
    <Footer {hyperlink_color}/>
</div>
