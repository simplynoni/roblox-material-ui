/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
import { ThemeProps } from './types';
interface TopbarProps extends ThemeProps {
    Title: string;
    RichText?: boolean;
    TextAlignment?: Enum.TextXAlignment;
    Height?: UDim;
    CloseFunction?: () => void;
    LeadingIcon?: {
        Icon: Icons | string;
        Function: () => void;
    };
}
export default class Topbar extends Roact.PureComponent<TopbarProps> {
    render(): Roact.Element;
}
export {};
