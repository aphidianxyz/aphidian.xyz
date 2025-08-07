import type { PageParentData } from "../$types";
import type { PageLoad } from "../../[slug]/$types";

// TODO: define this somewhere else in the project
export type blogEntry = {
    slug: string,
    date: string,
    title: string,
    tags: string[],
    contentFile: string
}

export const load: PageLoad = async ({ params, parent }) => {
    const parentData: PageParentData = await parent();
    const entries = parentData.entries;
    let matches: blogEntry[] = new Array();

    entries.forEach((entry) => {
        const tags = entry.tags;
        tags.forEach((tag) => {
            if (params.slug === tag) {
                matches.push(entry);
            }
        });
    });

    return {
        tagName: params.slug,
        matches: matches
    };
}
