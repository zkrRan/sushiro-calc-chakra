import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                bg: "element.background",
            },
        },
    },
    components: {
        Container: defineStyleConfig({
            baseStyle: {
                maxW: "7xl",
                px: 4,
            },
        }),
    },
    fonts: {
        heading: "Line, sans-serif",
        body: "Line, sans-serif",
    },
    colors: {
        primary: {
            50: "#fffceb",
            100: "#fdf4c8",
            200: "#fbe98c",
            300: "#f8d751",
            400: "#f6c529",
            500: "#efa40f", // Base Color
            600: "#d47e0b",
            700: "#b0590d",
            800: "#8f4611",
            900: "#763a11",
        },
        element: {
            footer: "#181617",
            background: "#232122",
            content: "rgba(0, 0, 0, 0.1)",
        },
    },
});
