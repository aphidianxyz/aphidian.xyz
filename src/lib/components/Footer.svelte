<script lang="ts">
    let { footerLinkColor }: { footerLinkColor: string } = $props();
</script>

<style>
    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    footer {
        margin-bottom: 20px;
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
        style:color={footerLinkColor}
        href="/"
    >
        aphidian.xyz
    </a>
</footer>
