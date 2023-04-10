/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />
/// <reference types="roact" />
/// <reference types="@rbxts/compiler-types" />
import { SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { Icons } from '../Icons';
import { CustomColorGroup } from '../material-color';
import { ColorScheme, ContainerScheme, ThemeProps } from '../types';
export interface ButtonProps extends ThemeProps {
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    AutomaticSize?: boolean;
    Text: string;
    Icon?: Icons | string;
    Disabled?: boolean;
    ColorScheme?: ColorScheme;
    CustomColorGroup?: CustomColorGroup['Colors'];
    Pressed: () => void;
}
export type ContainerButtonProps = Omit<ButtonProps, 'ColorScheme'> & {
    ColorScheme?: ContainerScheme;
};
export interface ButtonState {
    Debounce: boolean;
}
export default abstract class BaseButton<Props extends ButtonProps | ContainerButtonProps = ButtonProps> extends Roact.Component<Props, ButtonState> {
    stateMotor: SingleMotor;
    stateBinding: Roact.Binding<number>;
    state: {
        Debounce: boolean;
    };
    constructor(props: Props);
    render(): Roact.Element | undefined;
    MouseClick(): Promise<void>;
    MouseUp(): void;
    MouseDown(): void;
    MouseEnter(): void;
    MouseLeave(): void;
}
