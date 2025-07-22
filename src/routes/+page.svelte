<script lang="ts">
    import '../app.css';
    const nav_emojis: String[] = ['📓','⚗️','🪲'];
    const nav_entries: String[] = ['blog', 'projects', 'about'];
    let dark_mode: Boolean = $state(false);

    let bg_color: String = $state("#F5EDD1");
    let body_text_color: String = $state("#1E2A18");
    let theme_icon: String = $state("🌑");
    let hyperlink_color: String = $state("#566A95");
    let logo_svg: string = $state("aphid-icon-light.svg");
    function switchTheme() {
        dark_mode = !dark_mode;
        bg_color = dark_mode ?  "#1E2A18" : "#F5EDD1";
        body_text_color = dark_mode ? "#F5EDD1" : "#1E2A18";
        hyperlink_color = dark_mode ? "#8490B8" : "#566A95";
        theme_icon = dark_mode ? "☀️" : "🌑";
    }
</script>


<svelte:head>
    <title>aphidian.xyz</title>
</svelte:head>

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

ul, footer {
    font-family: AlegreyaSans;
    font-weight: normal;
    font-style: normal;
}

.sitetitle {
    font-family: Alegreya;
    font-weight: bold;
    font-size: calc(9vw + 30px);
    margin-left: 1vw; 
}

a:link.sitetitle, a:visited.sitetitle, a:link, a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.logo {
    border-style: solid;
    border-radius: 5px;
    border-radius: 10px;
    width: 12vw;
    height: auto; 
}

footer {
    width: 100%;
    text-align: center;
}

nav, .themeSwitcher {
    font-size: calc(1vw + 20px);
}

.themeSwitcher {
    align-self: flex-end;
    margin-right: 0.5vw;
    margin-top: 0.5vh;
	background: none;
	border: none;
}


</style>

<div class="mainContainer" style:background-color={bg_color}>
    <button class="themeSwitcher" onclick={switchTheme}>
        {theme_icon}
    </button>
    <main>
        <section style:margin-bottom="1vh">
            <img 
                style:color={body_text_color}
                class="logo" src={logo_svg} alt="aphidian logo" 
            >
            <a 
                style:color={body_text_color}
                class="sitetitle" href="/"
            >
                aphidian
            </a>
        </section>
        <nav>
            <ul style:list-style="none">
                {#each nav_entries as entry, emoji_index}
                    <li>
                        <a 
                            style:color={hyperlink_color}
                            href="/{entry}"
                        >
                            {nav_emojis[emoji_index]} {entry}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </main>
    <footer>
        <a style:color={hyperlink_color} href="/">aphidian.xyz</a>
    </footer>
</div>
