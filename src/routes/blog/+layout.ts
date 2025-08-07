import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        entries: [
            // newer entries start here
            { 
                slug: 'welcome-to-my-blog-the-sequel',
                date: 'Aug 07 2025',
                title: 'Welcome to my blog! (the Sequel)',
                tags: ['meta',
                    'second-post'],
                contentFile: '/blogEntries/welcome-to-my-blog.html'
            },
            { 
                slug: 'welcome-to-my-blog',
                date: 'Aug 01 2025',
                title: 'Welcome to my blog!',
                tags: ['meta',
                    'first-post'],
                contentFile: '/blogEntries/welcome-to-my-blog.html'
            },
        ]
    }
}
