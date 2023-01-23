/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
interface ColorTileProps {
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
export default class ThemedColorTile extends Roact.Component<ColorTileProps> {
    render(): Roact.Element;
}
export {};
