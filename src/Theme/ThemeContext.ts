import Roact from '@rbxts/roact';
import { Theme, ThemeColors } from '..';
import Scheme from '../material-color';

const DefaultThemeColor = ThemeColors.Orange.Color;
const ThemeContext = Roact.createContext({
	Theme: 'Dark',
	Colors: Scheme.dark(DefaultThemeColor).Colors,
	_Color: DefaultThemeColor,
	SetTheme: (theme: Theme) => {
		warn('Attempt to set theme using default context.');
	},
	SetColor: (color3: Color3) => {
		warn('Attempt to set color using default context.');
	},
});

export default ThemeContext;
