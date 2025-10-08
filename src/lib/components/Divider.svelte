<script lang="ts">
    import type { ColorHex } from "../../routes/proxy+layout";

    let { 
        color,
        width 
    }: {
        color: ColorHex,
        width: string,
    } = $props();
</script>

<hr
    style:width={width}
    style:color={color}
    style:border-color={color}
>
