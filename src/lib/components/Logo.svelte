<script lang="ts">
    // NOTE: don't know if there's an idiomatic way to define a lot of variable types
    let { imgHeight, imgWidth, borderWidth, borderColor, logoFile }: 
        { imgHeight: string, imgWidth: string, borderWidth: string, borderColor: string,
        logoFile: string}= $props();
</script>

<img
    style:border-style="solid"
    style:border-radius="8px"
    style:height={imgHeight}
    style:width={imgWidth}
    style:border-width={borderWidth}
    style:color={borderColor}
    src={logoFile} alt={"aphidian logo"}
>
