import type { PageParentData } from "../$types";
import type { PageLoad } from "../../[slug]/$types";
import type { blogEntry } from "../../+layout";

export const load: PageLoad = async ({ params, parent }) => {
    const parentData: PageParentData = await parent();
    const entries = parentData.entries;
    let tagName: string = params.slug; 
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
        tagName,
        matches
    };
}
