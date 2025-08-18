<script lang="ts">
    let { margin="0px 0px 0px 0px", fontSize, titleColor }:
    { 
        margin?: string,
        fontSize: string,
        titleColor: string
    }= $props();
</script>

<style>
    a:link {
        text-decoration: none;
    }
</style>

<h1 style:margin={margin}>
    <a
        style:font-family="Alegreya"
        style:font-weight="bold"
        style:font-size={fontSize}
        style:color={titleColor}
        href='/'
    >
        aphidian
    </a>
</h1>
