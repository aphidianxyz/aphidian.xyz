import type { PageLoad } from './$types';

export type ProjectEntry = {
    slug: string,
    name: string,
    desc: string,
    link: string
}

// TODO: maybe this could be loaded from a JSON file instead
export const load: PageLoad = () => {
    const entries: ProjectEntry[] = [
        // newer entries start here
        {
            slug: 'aphidianxyz',
            name: 'aphidian.xyz',
            desc: 'my personal website',
            link: 'https://github.com/aphidianxyz/aphidian.xyz'
        },
        {
            slug: 'goferbot',
            name: 'goferbot',
            desc: 'a chat utility telegram bot',
            link: 'https://github.com/aphidianxyz/goferbot'
        }
    ]
    return {
        entries
    };
}
