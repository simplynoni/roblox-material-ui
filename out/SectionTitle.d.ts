/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { ThemeProps } from './types';
interface SectionTitleProps extends ThemeProps {
    Text: string;
    Size?: UDim2;
    TextSize?: number;
    MaxTextSize?: number;
}
export default class SectionTitle extends Roact.PureComponent<SectionTitleProps> {
    render(): Roact.Element;
}
export {};
