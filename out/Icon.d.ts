/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
interface IconProps {
    Icon: Icons | string;
    IconSize: '24p';
    IconColor: Color3;
    IconTransparency?: number;
    AnchorPoint?: Vector2;
    Size: UDim2;
    Position?: UDim2;
    LayoutOrder?: number;
    MaxSize?: boolean;
    Circle?: boolean;
}
export default class Icon extends Roact.Component<IconProps> {
    render(): Roact.Element;
}
export {};
