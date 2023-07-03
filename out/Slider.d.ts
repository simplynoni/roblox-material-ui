/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { SingleMotor } from '@rbxts/flipper';
import { ThemeProps } from './types';
interface SliderProps extends ThemeProps {
    Value: number;
    Steps?: number;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    LayoutOrder?: number;
    ChangedEvent?: (Value: number) => void;
}
interface SliderState {
    Value: number;
}
export default class Slider extends Roact.PureComponent<SliderProps, SliderState> {
    railRef: Roact.Ref<Frame>;
    dragMotor: SingleMotor;
    dragBinding: Roact.Binding<number>;
    constructor(props: SliderProps & ThemeProps);
    render(): Roact.Element;
    private setValue;
    protected didUpdate(previousProps: SliderProps): void;
}
export {};
