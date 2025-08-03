<script lang="ts">
    import type { LayoutProps } from './$types';
    let { data }: LayoutProps = $props();

    let uniqueTags: string[] = new Array();
    for (var entry of data.entries) {
        for (var tag of entry.tags) {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag);
            }
        }
    }
    
</script>

<h1>tags</h1>
{#each uniqueTags as tag, i}
    <a href="/blog/tags/{tag}">{tag}</a>{#if i < uniqueTags.length - 1},&nbsp;{/if}
{/each}
