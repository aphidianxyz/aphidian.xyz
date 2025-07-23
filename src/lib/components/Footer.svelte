<script lang="ts">
    let { hyperlink_color } = $props()
</script>

<style>
    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>

<footer
    style:font-family="AlegreyaSans"
    style:width="100%"
    style:text-align="center"
    style:font-weight="normal"
    style:font-style="normal"
>
    <a 
        style:color={hyperlink_color}
        href="/"
    >
        aphidian.xyz
    </a>
</footer>
