import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        palette: {
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
        },
        icon: {
            full: {
                light: "/aphid-icon-light.svg",
                dark: "/aphid-icon-dark.svg",
            },
            cropped: {
                light: "/aphid-icon-crop-light.svg",
                dark: "/aphid-icon-crop-dark.svg"
            },
        },
        navElements: {
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
    }
}
