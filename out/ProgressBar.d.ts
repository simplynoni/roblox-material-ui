/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { ColorScheme } from './Types';
interface ProgressBarProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	Label?: string;
	Value: number;
	ShowValue?: boolean;
	ColorScheme?: ColorScheme;
}
export default class ThemedProgressBar extends Roact.Component<ProgressBarProps> {
	render(): Roact.Element;
}
export {};
