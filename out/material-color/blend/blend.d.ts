/// <reference types="@rbxts/types" />
/**
 * Functions for blending in HCT and CAM16.
 */
export declare class Blend {
    /**
     * Blend the design color's HCT hue towards the key color's HCT
     * hue, in a way that leaves the original color recognizable and
     * recognizably shifted towards the key color.
     *
     * @param designColor Color3 representation of an arbitrary color.
     * @param sourceColor Color3 representation of the main theme color.
     * @return The design color with a hue shifted towards the
     * system's color, a slightly warmer/cooler variant of the design
     * color's hue.
     */
    static harmonize(designColor: Color3, sourceColor: Color3): Color3;
    /**
     * Blends hue from one color into another. The chroma and tone of
     * the original color are maintained.
     *
     * @param from Color3 representation of color
     * @param to Color3 representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, with a hue blended towards to. Chroma and tone
     * are constant.
     */
    static hctHue(from: Color3, to: Color3, amount: number): Color3;
    /**
     * Blend in CAM16-UCS space.
     *
     * @param from Color3 representation of color
     * @param to Color3 representation of color
     * @param amount how much blending to perform; 0.0 >= and <= 1.0
     * @return from, blended towards to. Hue, chroma, and tone will
     * change.
     */
    static cam16Ucs(from: Color3, to: Color3, amount: number): Color3;
}
