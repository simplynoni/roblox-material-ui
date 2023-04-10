import { ThemeState } from './Theme/ThemeState';

export interface ThemeProps {
	Theme: ThemeState;
}

export enum Theme {
	Light = 'Light',
	Dark = 'Dark',
}

export enum ColorScheme {
	Primary = 'Primary',
	Secondary = 'Secondary',
	Tertiary = 'Tertiary',
	Error = 'Error',
}

export enum LowerCaseColorScheme {
	Primary = 'primary',
	Secondary = 'secondary',
	Tertiary = 'tertiary',
	Error = 'error',
}

export enum ContainerScheme {
	PrimaryContainer = 'PrimaryContainer',
	SecondaryContainer = 'SecondaryContainer',
	TertiaryContainer = 'TertiaryContainer',
	ErrorContainer = 'ErrorContainer',
}

export enum LowerCaseContainerScheme {
	PrimaryContainer = 'primaryContainer',
	SecondaryContainer = 'secondaryContainer',
	TertiaryContainer = 'tertiaryContainer',
	ErrorContainer = 'errorContainer',
}
