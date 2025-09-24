import type { LayoutLoad } from './$types';

export type blogEntry = {
    slug: string,
    date: string,
    title: string,
    tags: string[],
    contentFile: string
}

export const load: LayoutLoad = () => {
    const entries: blogEntry[] = [
            // newer entries start here
            { 
                slug: 'welcome-to-my-blog-tagless',
                date: 'sep 24 2025',
                title: 'Welcome to my tagless blog entry!',
                tags: [],
                contentFile: '/blogEntries/welcome-to-my-blog.html'
            },
            { 
                slug: 'welcome-to-my-blog-the-sequel',
                date: 'aug 07 2025',
                title: 'Welcome to my blog! (the Sequel no one asked for)',
                tags: ['meta',
                    'second-post',
                    'redundant-post'],
                contentFile: '/blogEntries/welcome-to-my-blog.html'
            },
            { 
                slug: 'welcome-to-my-blog',
                date: 'aug 01 2025',
                title: 'Welcome to my blog!',
                tags: ['meta',
                    'first-post'],
                contentFile: '/blogEntries/welcome-to-my-blog.html'
            },
        ]

    return {
        entries: entries
    }
}
