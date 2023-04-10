/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
interface SliderTileProps {
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
export default class ThemedSliderTile extends Roact.Component<SliderTileProps> {
    render(): Roact.Element;
}
export {};
