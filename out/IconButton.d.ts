/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import { SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { IconData, ThemeProps } from './types';
interface IconButtonProps extends ThemeProps {
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size: UDim2;
    ZIndex?: number;
    LayoutOrder?: number;
    Icon: IconData;
    IconColor?: Color3;
    Pressed: () => void;
}
interface IconButtonState {
    Debounce: boolean;
}
export default class IconButton extends Roact.Component<IconButtonProps, IconButtonState> {
    stateMotor: SingleMotor;
    stateBinding: Roact.Binding<number>;
    constructor(props: IconButtonProps);
    render(): Roact.Element;
}
export {};
