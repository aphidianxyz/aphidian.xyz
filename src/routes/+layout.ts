import type { LayoutLoad } from './$types';

export interface ColorPalette {
    [name: string]: ColorScheme;
}

export interface NavEntryList {
    [name: string]: NavEntry;
}

export type colorHex = string;

export type ColorScheme = {
    light: colorHex;
    dark: colorHex;
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
    }

    return {
        palette,
        icon,
        navElements,
    }
}
