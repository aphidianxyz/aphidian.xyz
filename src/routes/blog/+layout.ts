import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        entries: [
            // newer entries start here
            { slug: 'a-test-entry', title: 'Test Entry 2', tags:['meta', 'test', 'etc', 'misc', 'lots', 'miscellanous and long tags', 'long tag name for testing flexbox wrapping and container widths'], contentFile: '/blogEntries/welcome-to-my-blog.html'},
            { slug: 'welcome-to-my-blog', title: 'Welcome to my blog!', tags: ['meta', 'first-post'], contentFile: '/blogEntries/welcome-to-my-blog.html'},
        ]
    }
}
