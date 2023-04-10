/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
interface IconButtonProps {
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size: UDim2;
    ZIndex?: number;
    LayoutOrder?: number;
    Icon: Icons | string;
    IconColor?: Color3;
    Pressed: () => void;
}
export default class ThemedIconButton extends Roact.Component<IconButtonProps> {
    render(): Roact.Element;
}
export {};
