import type { LayoutLoad } from './$types';

export interface ColorPalette {
    [name: string]: ColorScheme;
}

export interface NavEntryList {
    [name: string]: NavEntry;
}

export interface ElementSizes {
    [name: string]: ElementSize
}

export type ColorHex = string;

export type ElementSize = string; 

export type ColorScheme = {
    light: ColorHex;
    dark: ColorHex;
}

export type NavEntry = {
    name: string,
    dest: string,
    emoji: string,
    desc: string
}

export const load: LayoutLoad = () => {
    const palette: ColorPalette = {
        primary: {
            light: "#1E2A18",
            dark: "#F5EDD1",
        },
        secondary: {
            light: "#5B741B",
            dark: "#89955B",
        },
        tertiary: {
            light: "#F5EDD1",
            dark: "#151914",
        },
        accents: {
            light: "#8B5C2D",
            dark: "#BA7A3B"
        }
    };
    const icon: ColorPalette = {
        full: {
            light: "/aphid-icon-light.svg",
            dark: "/aphid-icon-dark.svg",
        },
        cropped: {
            light: "/aphid-icon-crop-light.svg",
            dark: "/aphid-icon-crop-dark.svg"
        },
    };
    const navElements: NavEntryList = {
        home: {
            name: "home",
            dest: "/",
            emoji: "🏡",
            desc: "homepage",
        },
        blog: {
            name: "blog",
            dest: "/blog",
            emoji: "📓",
            desc: "aphids' writings",
        },
        tags: {
            name: "tags",
            dest: "/blog/tags",
            emoji: "🗂️",
            desc: "all blog entry tags"
        },
        projects: {
            name: "projects",
            dest: "/projects",
            emoji: "⚗️",
            desc: "aphids' projects",
        },
        about: {
            name: "about",
            dest: "/about",
            emoji: "🪲",
            desc: "about aphids",
        },
    };
    const BLOG_ENTRY_ARTICLE_FONT = "calc(0.8vw + 12px)";
    const BLOG_HOME_ENTRY_FONT = "calc(0.5vw + 18px)";
    const elementSizes: ElementSizes = {
        H1Font: "calc(1vw + 30px)",
        H1Divider: "calc(25% + 10px)",
        blogHomeWidth: "calc(40vw + 180px)",
        blogHomeEntryFont: BLOG_HOME_ENTRY_FONT,
        blogHomeTagFont: BLOG_HOME_ENTRY_FONT,
        blogHomeColumnFont: BLOG_HOME_ENTRY_FONT,
        blogEntryHR: "calc(10% + 50px)",
        blogEntryArticleFont: BLOG_ENTRY_ARTICLE_FONT,
        blogEntryArticleEle: "calc(35vw + 205px)",
        blogEntryTagsNav: "calc(50vw + 50px)",
        blogEntryCode: "calc(0.5vw + 10px)",
        tagsHomeNavEle: "calc(50vw + 50px)",
        tagsFont: BLOG_ENTRY_ARTICLE_FONT,
    };

    return {
        palette,
        icon,
        navElements,
        elementSizes,
    }
}
