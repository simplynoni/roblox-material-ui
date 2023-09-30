/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { ThemeProps } from '../types';
import { ContainerButtonProps } from './ButtonBase';
export default class TonalButtonBase extends Roact.Component<ContainerButtonProps & ThemeProps> {
    render(): Roact.Element;
}
