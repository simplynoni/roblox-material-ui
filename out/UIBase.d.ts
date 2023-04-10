/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import { GroupMotor, SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { ThemeProps } from './Types';
interface UIBaseProps extends ThemeProps {
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
interface UIBaseState {
    Closed: boolean;
    Visible: boolean;
}
export default class UIBase extends Roact.Component<UIBaseProps, UIBaseState> {
    positionMotor: GroupMotor<{
        X: number;
        Y: number;
    }>;
    positionBinding: Roact.Binding<{
        X: number;
        Y: number;
    }>;
    fadeMotor: SingleMotor;
    fadeBinding: Roact.Binding<number>;
    constructor(props: UIBaseProps);
    render(): Roact.Element;
    private setClosed;
    protected didUpdate(previousProps: UIBaseProps): void;
}
export {};
