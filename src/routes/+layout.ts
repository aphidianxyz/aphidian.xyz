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
                dark: "#1E2A18",
            },
        },
        icon: {
            light: "/aphid-icon-light.svg",
            dark: "/aphid-icon-dark.svg",
        },
    }
}
