<script lang="ts">
    const {
        imgHeight,
        imgWidth,
        borderStyle = "solid",
        borderRadius = "0.75vw",
        borderWidth,
        borderColor,
        logoFile,
        margin,
        alt = "aphidian logo",
    }: {
        imgHeight: string,
        imgWidth: string,
        borderStyle?: string,
        borderRadius?: string,
        borderWidth: string,
        borderColor: string,
        logoFile: string,
        margin: string
        alt?: string,
    }= $props();
</script>

<img
    style:border-style={borderStyle}
    style:border-radius={borderRadius}
    style:height={imgHeight}
    style:width={imgWidth}
    style:border-width={borderWidth}
    style:color={borderColor}
    style:margin={margin}
    src={logoFile} {alt}
>
