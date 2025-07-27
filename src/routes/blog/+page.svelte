<script lang="ts">
    import TitleBar from '$lib/components/TitleBar.svelte';
    import type { LayoutProps } from "../../routes/$types";
    let { data }: LayoutProps = $props();
</script>

<TitleBar 
    {data}
    imgWidth="calc(3vw + 20px)"
    imgHeight="auto"
    imgMargin="0px 0.5vw 0px 0px"
    borderWidth="3px"
    titleMargin="0.5vh 0px 0px 0px"
    fontSize="calc(3vw + 20px)"
/>
