import { defaultTheme } from "@/theme/index.ts";
import type { Config } from "./types.ts";

/**
 * Default configuration
 *
 * @returns Seyuna **Config** object
 * @see {@link https://seyuna.com/ui/config#default}
 */
export const defaultConfig: Config = {
    name: "Seyuna",
    theme: "default",
    mode: "system",
    breakpoints: {
        viewport: {
            xs: "576px",
            sm: "768px",
            md: "992px",
            lg: "1200px",
            xl: "1600px",
            _2xl: "1920px",
            _3xl: "2560px",
            _4xl: "3200px",
            _5xl: "3840px",
        },
        container: {
            xs: "100px",
            sm: "200px",
            md: "300px",
            lg: "400px",
            xl: "500px",
            _2xl: "600px",
            _3xl: "700px",
            _4xl: "800px",
            _5xl: "900px",
            _6xl: "1000px",
            _7xl: "1200px",
            _8xl: "1400px",
            _9xl: "1600px",
            _10xl: "1800px",
            _11xl: "2000px",
            _12xl: "2200px",
            _13xl: "2400px",
            _14xl: "2600px",
            _15xl: "2800px",
            _16xl: "3000px",
            _17xl: "3200px",
            _18xl: "3400px",
            _19xl: "3600px",
            _20xl: "3800px",
        },
    },
    upscale: "_2xl",
    spacing: "1rem",
    themes: [defaultTheme],
};

/**
 * Export all types
 */
export type * from "./types.ts";
