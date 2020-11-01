import { theme, DefaultTheme } from "@chakra-ui/core";

const customTheme: DefaultTheme = {
    ...theme,
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'Menlo, monospace',
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 500,
        bold: 700,
    },
    radii: {
        ...theme.radii,
        sm: '5px',
        md: '8px',
    },
    fontSizes: {
        ...theme.fontSizes,
        '2xl': '54px'
    },
    colors: {
        ...theme.colors,
        purple: {
            ...theme.colors.purple,
            500: '#8257e5',
            700: '#4733A1'
        },
        gray: {
            ...theme.colors.gray,
            300: '#e1e1e6',
            500: '#29292e',
            700: '#202024'
        },
       
    },

}

export default customTheme;