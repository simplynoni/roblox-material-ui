import { Theme, ThemeState } from '../Types';
import Scheme from '../material-color';

const DefaultColor = Color3.fromRGB(255, 89, 0);
const DefaultTheme: ThemeState = {
	Color: DefaultColor,
	Theme: Theme.Dark,
	Scheme: Scheme.dark(DefaultColor).Colors,
};

export default DefaultTheme;
