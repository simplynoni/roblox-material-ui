/// <reference types="@rbxts/types" />
/**
 * Represents a Material color scheme, a mapping of color roles to colors.
 */
export default class Scheme {
    readonly Colors: {
        primary: Color3;
        primaryContainer: Color3;
        onPrimary: Color3;
        onPrimaryContainer: Color3;
        secondary: Color3;
        secondaryContainer: Color3;
        onSecondary: Color3;
        onSecondaryContainer: Color3;
        tertiary: Color3;
        tertiaryContainer: Color3;
        onTertiary: Color3;
        onTertiaryContainer: Color3;
        error: Color3;
        errorContainer: Color3;
        onError: Color3;
        onErrorContainer: Color3;
        background: Color3;
        onBackground: Color3;
        surface: Color3;
        onSurface: Color3;
        surfaceVariant: Color3;
        onSurfaceVariant: Color3;
        outline: Color3;
        shadow: Color3;
        inverseSurface: Color3;
        inverseOnSurface: Color3;
        inversePrimary: Color3;
    };
    /**
     * @return Light Material color scheme, based on the color's hue.
     */
    static light(color3: Color3): Scheme;
    /**
     * @return Dark Material color scheme, based on the color's hue.
     */
    static dark(color3: Color3): Scheme;
    constructor(Colors: {
        primary: Color3;
        primaryContainer: Color3;
        onPrimary: Color3;
        onPrimaryContainer: Color3;
        secondary: Color3;
        secondaryContainer: Color3;
        onSecondary: Color3;
        onSecondaryContainer: Color3;
        tertiary: Color3;
        tertiaryContainer: Color3;
        onTertiary: Color3;
        onTertiaryContainer: Color3;
        error: Color3;
        errorContainer: Color3;
        onError: Color3;
        onErrorContainer: Color3;
        background: Color3;
        onBackground: Color3;
        surface: Color3;
        onSurface: Color3;
        surfaceVariant: Color3;
        onSurfaceVariant: Color3;
        outline: Color3;
        shadow: Color3;
        inverseSurface: Color3;
        inverseOnSurface: Color3;
        inversePrimary: Color3;
    });
}
export declare class CustomColorGroup {
    readonly Colors: {
        color: Color3;
        onColor: Color3;
        colorContainer: Color3;
        onColorContainer: Color3;
    };
    static light(color3: Color3): CustomColorGroup;
    static dark(color3: Color3): CustomColorGroup;
    constructor(Colors: {
        color: Color3;
        onColor: Color3;
        colorContainer: Color3;
        onColorContainer: Color3;
    });
}
