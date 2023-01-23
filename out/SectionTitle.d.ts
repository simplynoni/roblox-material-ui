/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
interface SectionTitleProps {
    Text: string;
    Size?: UDim2;
    TextSize?: number;
    MaxTextSize?: number;
}
export default class SectionTitle extends Roact.Component<SectionTitleProps> {
    render(): Roact.Element;
}
export {};
