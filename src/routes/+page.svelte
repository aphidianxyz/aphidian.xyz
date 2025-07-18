<script lang="ts">
    const nav_emojis = ['📓','⚗️','🪲'];
    const nav_entry = ['blog', 'projects', 'about'];
    let dark_mode: Boolean = $state(false);
</script>

<svelte:head>
    <title>aphidian.xyz</title>
</svelte:head>

<style>
:global(body) {
    margin: 0;
    padding: 0;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 35vh;
    margin-bottom: 0;
}

section {
    display: flex;
}

ul {
    list-style: none;
}
</style>

<main>
    <section>
        <img
            style:border-style="solid"
            style:border-radius="10px"
            src="." alt="aphidian logo"
        >
        <h1 
            style:margin-left="10px"
            style:font-size="500%"
        >aphidian
        </h1>
    </section>
    <nav>
        <ul>
            {#each nav_entry as entry, emoji_index}
                <li>
                     <a href="/{entry}">{nav_emojis[emoji_index]} {entry}</a>
                </li>
            {/each}
        </ul>
    </nav>
    <footer>
        <a href=".">aphidian.xyz</a>
    </footer>
</main>
