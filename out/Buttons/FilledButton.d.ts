/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { ThemeProps } from '../types';
import { ButtonProps } from './ButtonBase';
export default class FilledButton extends Roact.Component<ButtonProps & ThemeProps> {
    render(): Roact.Element;
}
