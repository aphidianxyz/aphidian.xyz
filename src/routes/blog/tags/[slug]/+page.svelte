<script lang="ts">
    import type { LayoutProps } from '../$types';
    import type { PageProps } from './$types';
    import type { blogEntry } from './+page';
    let { data }: LayoutProps & PageProps = $props();

    const matches: blogEntry[] = data.matches;
</script>

<style>

</style>

<h1>
    <a href="/blog/tags/{data.tagName}">{data.tagName}</a>
</h1>
{#each matches as match}
    <a href="/blog/{match.slug}">{match.title}</a>
{/each}
