/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
interface TopbarProps {
    Title: string;
    Height?: UDim;
    CloseFunction?: () => void;
    LeadingIcon?: {
        Icon: Icons | string;
        Function: () => void;
    };
}
export default class ThemedTopbar extends Roact.Component<TopbarProps> {
    render(): Roact.Element;
}
export {};
