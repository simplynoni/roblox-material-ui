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

// Theres probably a better way to do this but whatever
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

export const ThemeColors = {
	Red: { Color: Color3.fromHex('#ff2b2b'), Order: 1 },
	Orange: { Color: Color3.fromHex('#ff802b'), Order: 2 },
	Yellow: { Color: Color3.fromHex('#ffde2b'), Order: 3 },
	Green: { Color: Color3.fromHex('#3dff2b'), Order: 4 },
	Teal: { Color: Color3.fromHex('#2bffff'), Order: 5 },
	Blue: { Color: Color3.fromHex('#2b38ff'), Order: 6 },
	Purple: { Color: Color3.fromHex('#7d2bff'), Order: 7 },
	Pink: { Color: Color3.fromHex('#ff3db5'), Order: 8 },
};

export const DefaultThemeColor = ThemeColors.Orange;
