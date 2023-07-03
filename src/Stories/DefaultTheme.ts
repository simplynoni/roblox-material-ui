import Scheme from '../material-color';
import { Theme, ThemeState } from '../types';

const DefaultColor = Color3.fromRGB(255, 89, 0);
const DefaultTheme: ThemeState = {
	Color: DefaultColor,
	Theme: Theme.Dark,
	Scheme: Scheme.dark(DefaultColor).Colors,
};

export default DefaultTheme;
