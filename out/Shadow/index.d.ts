/// <reference types="roact" />
import Roact from '@rbxts/roact';
interface ShadowProps {
    Elevation: 1 | 2 | 3 | 4 | 5;
    Transparency?: number | Roact.Binding<number>;
    ZIndex?: number;
}
export default class Shadow extends Roact.PureComponent<ShadowProps> {
    render(): Roact.Element;
}
export {};
