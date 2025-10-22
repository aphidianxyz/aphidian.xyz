import type { LayoutLoad } from './$types';

export type blogEntry = {
    slug: string,
    date: string,
    title: string,
    tags: string[],
    contentFile: string,
    isHidden: boolean
}

// TODO: maybe this could be loaded from a JSON file instead
export const load: LayoutLoad = () => {
    const entries: blogEntry[] = [
            // newer entries start here
            { 
                slug: 'hello-world',
                date: 'oct 21 2025',
                title: 'hello world!',
                tags: ['meta',
                    'first-post'],
                contentFile: '/blogEntries/hello-world.html',
                isHidden: false
            },
            {
                slug: 'blog-demo-entry',
                date: 'july 20 1969',
                title: 'blog demo entry',
                tags: [],
                contentFile: '/blogEntries/blog-demo-entry.html',
                isHidden: true
            }
        ]

    return {
        entries: entries
    };
}
