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
    // TODO: better names; icons values for light and dark are not colorhexes
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
        // TODO: better names for site mascot
        full: {
            light: "icons/mascot/aphid-icon-light.svg",
            dark: "/icons/mascot/aphid-icon-dark.svg",
        },
        cropped: {
            light: "/icons/mascot/aphid-icon-crop-light.svg",
            dark: "/icons/mascot/aphid-icon-crop-dark.svg"
        },
        github: {
            light: "/icons/github-mark/github-mark.svg",
            dark: "/icons/github-mark/github-mark-white.svg",
        },
        email: {
            light: "/icons/misc/mailbox_with_mail.png",
            dark: "/icons/misc/mailbox_with_mail.png",
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

    const BLOG_ENTRY_ARTICLE_FONT = "calc(0.8vw + 15px)";
    const BLOG_HOME_ENTRY_FONT = "calc(1vw + 16px)";
    const GENERAL_H1_FONT = "calc(2vw + 18px)";
    const elementSizes: ElementSizes = {
        // theme switcher component
        defThemeSwitcherIconWidth: "calc(2vw + 10px)",
        defThemeSwitcherMargin: "0 0 0 0",
        // title/titlebar components
        defTitleIconWidth: "calc(3vw + 20px)",
        defTitleIconHeight: "auto",
        defTitleIconMargin: "0 0.25vw 0 0",
        defTitleIconBorderWidth: "0.3vh",
        defTitleTitleMargin: "0 1.25vw 0 0",
        defTitleTitleFont: GENERAL_H1_FONT,
        defTitleNavFont: "calc(1vw + 10px)",
        homeTitleFont: "calc(10vw + 30px)",
        // logo component
        homeLogoImgWidth: "calc(16vw + 16px)",
        // footer component
        footerMargin: "0 0 5vh 0",
        // / 
        homeHeight: "calc(80vh + 20px)",
        homeNavFont: "calc(1vw + 20px)",
        H1Font: GENERAL_H1_FONT,
        H1Divider: "calc(25vw + 10px)",
        // /blog
        blogHomeWidth: "calc(50vw + 120px)",
        blogHomeEntryFont: BLOG_HOME_ENTRY_FONT,
        blogHomeTagFont: BLOG_HOME_ENTRY_FONT,
        blogHomeColumnFont: BLOG_HOME_ENTRY_FONT,
        // /blog/[slug]
        blogEntryHR: "calc(10% + 50px)",
        blogEntryArticleFont: BLOG_ENTRY_ARTICLE_FONT,
        blogEntryArticleEle: "calc(50vw + 120px)",
        blogEntryTagsNav: "calc(50vw + 50px)",
        blogEntryCode: "calc(0.5vw + 10px)",
        blogEntryPreBorder: "1px solid",
        blogEntryImgSubGap: "1vh",
        // /tags & /tags/[slug]
        tagsHomeNavEle: "calc(50vw + 50px)",
        tagsFont: BLOG_ENTRY_ARTICLE_FONT,
        // /projects
        projectEntryFont: BLOG_HOME_ENTRY_FONT,
        // /about
        aboutBlurbFont: BLOG_ENTRY_ARTICLE_FONT,
        iconImgWidth: "calc(2vw + 20px)",
    };

    return {
        palette,
        icon,
        navElements,
        elementSizes,
    }
}
