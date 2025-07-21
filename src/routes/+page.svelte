<script lang="ts">
    import '../app.css';
    const nav_emojis = ['📓','⚗️','🪲'];
    const nav_entries = ['blog', 'projects', 'about'];
    let dark_mode: Boolean = $state(false); </script>

<svelte:head>
    <title>aphidian.xyz</title>
</svelte:head>

<style>
:global(body) {
    background-color: #F5EDD1;
    margin: 0;
    padding: 0;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.5vh;
    min-height: 95vh;
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
    margin-top: 0;
    margin-bottom: 1vh;
}

a:link.sitetitle, a:visited.sitetitle {
    color: #1E2A18;
    text-decoration: none;
}

a:link, a:visited {
    color: #566A95;
    text-decoration: none;
}

a:hover {
    color: #91596D;
    text-decoration: underline;
}

.logo {
    border-color: black;
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

nav {
    font-size: calc(1vw + 20px);
}
</style>

<main>
    <section>
        <!-- TODO: Replace placeholder img -->
        <img class="logo" src="funny-dog-dog-on-a-balloon.gif" alt="aphidian logo">
        <a class="sitetitle" href="/">aphidian</a>
    </section>
    <nav>
        <ul style:list-style="none">
            {#each nav_entries as entry, emoji_index}
                <li>
                     <a href="/{entry}">{nav_emojis[emoji_index]} {entry}</a>
                </li>
            {/each}
        </ul>
    </nav>
</main>
<footer>
    <a href="/">aphidian.xyz</a>
</footer>
