/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { ColorScheme, ThemeProps } from './Types';
interface ProgressBarProps extends ThemeProps {
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    Label?: string;
    Value: number;
    ShowValue?: boolean;
    ColorScheme?: ColorScheme;
}
interface ProgressBarState {
    Value: number;
    HolderWidth: number;
}
export default class ProgressBar extends Roact.Component<ProgressBarProps, ProgressBarState> {
    protected state: Readonly<ProgressBarState>;
    private holderRef;
    private valueMotor;
    private valueBinding;
    constructor(props: ProgressBarProps & ThemeProps);
    render(): Roact.Element;
    setValue(value: number): void;
    protected didMount(): void;
    protected didUpdate(previousProps: ProgressBarProps, previousState: ProgressBarState): void;
}
export {};
