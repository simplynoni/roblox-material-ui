/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { IconData } from './types';
interface IconProps {
    Icon: IconData;
    IconColor: Color3;
    IconTransparency?: number;
    AnchorPoint?: Vector2;
    Size: UDim2;
    Position?: UDim2;
    LayoutOrder?: number;
    MaxSize?: number;
    Circle?: boolean;
}
export default class Icon extends Roact.Component<IconProps> {
    render(): Roact.Element;
}
export {};
