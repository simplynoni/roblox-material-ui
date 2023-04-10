/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
interface UIBaseProps {
    AnchorPoint: Vector2;
    Position: UDim2;
    Size: UDim2;
    AspectRatio?: number;
    AspectType?: Enum.AspectType;
    DominantAxis?: Enum.DominantAxis;
    MaxSize?: Vector2;
    MinSize?: Vector2;
    Closed?: boolean;
    CustomClosePosition?: Vector2;
    PositionVelocity?: number;
    FadeVelocity?: number;
}
export default class ThemedUIBase extends Roact.Component<UIBaseProps> {
    render(): Roact.Element;
}
export {};
