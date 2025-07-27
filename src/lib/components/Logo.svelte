<script lang="ts">
    // NOTE: don't know if there's an idiomatic way to define a lot of variable types
    let { imgHeight, imgWidth, borderWidth, borderColor, logoFile, margin }: 
        { imgHeight: string, imgWidth: string, borderWidth: string, borderColor: string,
        logoFile: string, margin: string }= $props();
</script>

<img
    style:border-style="solid"
    style:border-radius="8px"
    style:height={imgHeight}
    style:width={imgWidth}
    style:border-width={borderWidth}
    style:color={borderColor}
    style:margin={margin}
    src={logoFile} alt={"aphidian logo"}
>
