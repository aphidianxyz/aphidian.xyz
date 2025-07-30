import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        entries: [
            // newer entries start here
            { slug: 'test-entry-3' , title: "Test Entry 3", tags: ['test']},
            { slug: 'test-entry-2', title: "Blog Entry 2", tags: ['meta', 'testing', 'etc']},
            { slug: 'welcome-to-my-blog', title: 'Welcome to my blog!', tags: ['meta']},
        ]
    }
}
