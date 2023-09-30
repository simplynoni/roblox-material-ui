/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
/// <reference types="@rbxts/compiler-types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
import { SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { Icons } from '../Icons';
import { CustomColorGroup } from '../material-color';
import { ColorScheme, ContainerScheme } from '../types';
export interface ButtonRenderProps {
    StateMotor: SingleMotor;
    StateBinding: Roact.Binding<number>;
    MouseClick: () => Promise<void>;
    MouseUp: () => void;
    MouseDown: () => void;
    MouseEnter: () => void;
    MouseLeave: () => void;
}
export interface ButtonBaseProps {
    Disabled?: boolean;
    Pressed: () => void;
    Render: (props: ButtonRenderProps) => Roact.Element;
}
export interface ButtonProps extends Omit<ButtonBaseProps, 'Render'> {
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    AutomaticSize?: boolean;
    Text: string;
    Icon?: Icons | string;
    ColorScheme?: ColorScheme;
    CustomColorGroup?: CustomColorGroup['Colors'];
}
export type ContainerButtonProps = ButtonProps & {
    ColorScheme?: ContainerScheme;
};
interface ButtonBaseState {
    Debounce: boolean;
}
export default class ButtonBase extends Roact.Component<ButtonBaseProps, ButtonBaseState> {
    stateMotor: SingleMotor;
    stateBinding: Roact.Binding<number>;
    constructor(props: ButtonBaseProps);
    render(): Roact.Element | undefined;
    MouseClick(): Promise<void>;
    MouseUp(): void;
    MouseDown(): void;
    MouseEnter(): void;
    MouseLeave(): void;
}
export {};
