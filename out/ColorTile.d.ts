/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import { SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
import { ThemeProps } from './types';
interface ColorTileProps extends ThemeProps {
    Title: string;
    Description?: string;
    Color: Color3;
    Icon?: Icons;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    LayoutOrder?: number;
    PressedEvent?: () => void;
    OpensNewPage?: boolean;
    Selected?: boolean;
}
interface ColorTileState {
    Color: Color3;
    Icon?: Icons;
    Selected?: boolean;
}
export default class ColorTile extends Roact.PureComponent<ColorTileProps, ColorTileState> {
    stateMotor: SingleMotor;
    stateBinding: Roact.Binding<number>;
    constructor(props: ColorTileProps);
    render(): Roact.Element;
    protected didUpdate(previousProps: ColorTileProps): void;
}
export {};
