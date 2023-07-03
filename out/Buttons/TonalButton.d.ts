/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { ThemeProps } from '../types';
import BaseButton, { ContainerButtonProps } from './BaseButton';
export default class TonalButtonBase extends BaseButton<ContainerButtonProps & ThemeProps> {
    render(): Roact.Element;
}
