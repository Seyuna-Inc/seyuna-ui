import type { Mode, Theme } from "../theme/types.js";
/**
 * Object containing the Seyuna UI app configuration.
 *
 * See more: https://seyuna.com/ui/config
 */
export interface Config {
    /**
     * The name of the app (brand name).
     *
     * See more: https://seyuna.com/ui/config/brand#name
     */
    name: string;
    /**
     * The slogan of the app (brand slogan).
     *
     * See more: https://seyuna.com/ui/config/brand#slogan
     */
    slogan: string;
    /**
     * The default theme of the app.
     *
     * See more: https://seyuna.com/ui/config/theme#default
     */
    theme: string;
    /**
     * Seyuna supports both light and dark mode out of the box. By setting the mode to "system", the app uses the preferred mode of the user's operating system by default.
     *
     * See more: https://seyuna.com/ui/config/mode
     */
    mode: Mode;
    /**
     * Including a CSS reset is a common practice to reduce inconsistencies within different browsers.
     *
     * It's recommended to keep this option enabled unless you are you using custom resets.
     *
     * See more: https://seyuna.com/css-reset
     */
    reset: boolean;
    /**
     * Seyuna uses 2 types of breakpoints:
     * - Container
     * - Viewport
     *
     * We suggest the use of container breakpoints whenever possible.
     *
     * See more: https://seyuna.com/ui/config/breakpoints
     */
    breakpoints: Breakpoints;
    /**
     * Seyuna is able to upscale content from a certain breakpoint and make it look the same on higher resolutions.
     *
     * Upscaling will take place from the breakpoint you define here.
     *
     * See more: https://seyuna.com/ui/config/scaling
     */
    upscale: false | "lg" | "xl" | "_2xl" | "_3xl" | "_4xl" | string;
    /**
     * The default spacing that every component in the Seyuna ecosystem will adhere to.
     *
     * See more: https://seyuna.com/ui/config/spacing
     */
    spacing: `${number}rem`;
    /**
     * The array containing your theme objects.
     *
     * Seyuna allows apps to have more than one theme.
     *
     * See more: https://seyuna.com/ui/config/theme#themes
     */
    themes: Theme[];
    /**
     * The directory path where seyuna will generate the necessary files.
     *
     * See more: https://seyuna.com/ui/config/path
     */
    path: string;
}
/**
 * The viewport & container breakpoints for the app.
 *
 * See more: https://seyuna.com/ui/config/breakpoints
 */
export type Breakpoints = {
    viewport: {
        xs: `${number}px`;
        sm: `${number}px`;
        md: `${number}px`;
        lg: `${number}px`;
        xl: `${number}px`;
        _2xl: `${number}px`;
        _3xl: `${number}px`;
        _4xl: `${number}px`;
        _5xl: `${number}px`;
        [key: string]: `${number}px` | undefined;
    };
    container: {
        xs: `${number}px`;
        sm: `${number}px`;
        md: `${number}px`;
        lg: `${number}px`;
        xl: `${number}px`;
        _2xl: `${number}px`;
        _3xl: `${number}px`;
        _4xl: `${number}px`;
        _5xl: `${number}px`;
        _6xl: `${number}px`;
        _7xl: `${number}px`;
        _8xl: `${number}px`;
        _9xl: `${number}px`;
        _10xl: `${number}px`;
        _11xl: `${number}px`;
        _12xl: `${number}px`;
        _13xl: `${number}px`;
        _14xl: `${number}px`;
        _15xl: `${number}px`;
        _16xl: `${number}px`;
        _17xl: `${number}px`;
        _18xl: `${number}px`;
        _19xl: `${number}px`;
        _20xl: `${number}px`;
        [key: string]: `${number}px` | undefined;
    };
};
//# sourceMappingURL=types.d.ts.map