import type { LayoutLoad } from './$types';

export type blogEntry = {
    slug: string,
    date: string,
    title: string,
    tags: string[],
    contentFile: string
}

// TODO: maybe this could be loaded from a JSON file instead
export const load: LayoutLoad = () => {
    const entries: blogEntry[] = [
            // newer entries start here
            { 
                slug: 'hello-world',
                date: 'oct 12 2025',
                title: 'hello world!',
                tags: ['meta',
                    'first-post'],
                contentFile: '/blogEntries/hello-world.html'
            },
        ]

    return {
        entries: entries
    };
}
