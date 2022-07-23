export enum Theme {
	Light = 'Light',
	Dark = 'Dark',
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

export * as Buttons from './Buttons';
export { default as ColorTile } from './ColorTile';
export { default as Icon } from './Icon';
export { default as IconButton } from './IconButton';
export { Px24 } from './Icons';
export { default as Scheme } from './material-color';
export { default as RoundedFrame } from './RoundedFrame';
export { default as SectionTitle } from './SectionTitle';
export * as Shadow from './Shadow';
export { default as Slider } from './Slider';
export { default as SliderTile } from './SliderTile';
export { default as Switch } from './Switch';
export { default as SwitchTile } from './SwitchTile';
export { default as MockThemeController } from './Theme/MockTheme';
export { default as ThemeController } from './Theme/Theme';
export { default as ThemeContext } from './Theme/ThemeContext';
export { default as Topbar } from './Topbar';
export { default as UIBase } from './UIBase';
