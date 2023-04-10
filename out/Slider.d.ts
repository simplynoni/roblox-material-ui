/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
interface SliderProps {
    Value: number;
    Steps?: number;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    LayoutOrder?: number;
    ChangedEvent?: (Value: number) => void;
}
export default class ThemedSlider extends Roact.Component<SliderProps> {
    render(): Roact.Element;
}
export {};
