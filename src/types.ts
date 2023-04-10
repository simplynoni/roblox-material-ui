import Scheme from './material-color';

export interface ThemeState {
	Theme: Theme;
	Scheme: Scheme['Colors'];
	Color: Color3;
}

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
