/// <reference types="@rbxts/compiler-types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
import Roact from '@rbxts/roact';
interface RoundedFrameProps extends Partial<JSX.IntrinsicElement<Frame>> {
    Size: Roact.Binding<UDim2> | UDim2;
    Position?: Roact.Binding<UDim2> | UDim2;
    AnchorPoint?: Roact.Binding<Vector2> | Vector2;
    CornerRadius: number | 'Full';
    Color: Color3;
    Transparency?: Roact.Binding<number> | number;
    Outline?: boolean;
    OutlineColor?: Color3;
}
declare const _default: Roact.ComponentConstructor<RoundedFrameProps, {}>;
export default _default;
