/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
interface ShadowElevation {
    Id: string;
    Size: UDim2;
    Position: UDim2;
    SliceCenter: Rect;
}
interface ShadowElevations {
    1: ShadowElevation;
    2: ShadowElevation;
    3: ShadowElevation;
    4: ShadowElevation;
    5: ShadowElevation;
}
declare const Elevations: ShadowElevations;
export default Elevations;
