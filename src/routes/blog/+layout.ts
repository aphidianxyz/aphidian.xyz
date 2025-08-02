import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        entries: [
            // newer entries start here
            { slug: 'welcome-to-my-blog', title: 'Welcome to my blog!', tags: ['meta', 'first-post'], contentFile: '/blogEntries/welcome-to-my-blog.html'},
        ]
    }
}
