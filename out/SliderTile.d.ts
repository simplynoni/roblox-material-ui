/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
import { ThemeProps } from './types';
interface SliderTileProps extends ThemeProps {
    Value: number;
    ShowValue?: boolean;
    Steps?: number;
    Title: string;
    Icon?: Icons;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    ChangedEvent?: (Value: number) => void;
}
interface SliderTileState {
    Icon?: Icons;
    DisplayValue: number;
}
export default class SliderTile extends Roact.PureComponent<SliderTileProps, SliderTileState> {
    state: {
        Icon: Icons | undefined;
        DisplayValue: number;
    };
    render(): Roact.Element;
    protected didUpdate(previousProps: SliderTileProps): void;
}
export {};
