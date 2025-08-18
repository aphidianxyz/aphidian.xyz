<script lang="ts">
    import type { LayoutData } from "../../routes/$types";

    const {
        data,
        footerLinkColor,
        footerMargin = data.elementSizes.footerMargin
    }: { 
        data: LayoutData,
        footerLinkColor: string,
        footerMargin?: string
    } = $props();
</script>

<style>
    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    footer {
        margin: var(--margin);
    }
</style>

<footer
    style:font-family="AlegreyaSans"
    style:width="100%"
    style:text-align="center"
    style:font-weight="normal"
    style:font-style="normal"
    style:margin={footerMargin}
>
    <a 
        style:color={footerLinkColor}
        href="/"
    >
        aphidian.xyz
    </a>
</footer>
