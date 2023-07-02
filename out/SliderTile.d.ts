/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { IconData, ThemeProps } from './types';
interface SliderTileProps extends ThemeProps {
    Value: number;
    ShowValue?: boolean;
    Steps?: number;
    Title: string;
    Icon?: IconData;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    ChangedEvent?: (Value: number) => void;
}
interface SliderTileState {
    Icon?: IconData;
    DisplayValue: number;
}
export default class SliderTile extends Roact.PureComponent<SliderTileProps, SliderTileState> {
    state: {
        Icon: IconData | undefined;
        DisplayValue: number;
    };
    render(): Roact.Element;
    protected didUpdate(previousProps: SliderTileProps): void;
}
export {};
