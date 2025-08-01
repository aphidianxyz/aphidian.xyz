import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, parent }) => {
    const parentData = await parent();

    const entry = parentData.entries.find((element) => element.slug === params.slug);

    if (!entry) {
        return {
            title: 'Article not found',
            contentFile: '/blogEntries/missing-article.html'
        }
    }
    return {
        title: entry.title,
        tags: entry.tags,
        contentFile: entry.contentFile 
    };
};
