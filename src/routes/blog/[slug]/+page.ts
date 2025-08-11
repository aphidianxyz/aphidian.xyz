import type { PageParentData } from "../$types";
import type { blogEntry } from "../proxy+layout";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params, parent }) => {
    const parentData: PageParentData = await parent();

    const entryResults: blogEntry | undefined = parentData.entries.find((element) => element.slug === params.slug);

    if (entryResults) {
        const entry: blogEntry = entryResults;
        return {
            entry
        };
    }
    const entry: blogEntry = {
        slug: 'error-missing-article',
        date: '',
        title: '',
        tags: [],
        contentFile: '/blogEntries/missing-article.html',
    };
    return {
        entry
    };
};
