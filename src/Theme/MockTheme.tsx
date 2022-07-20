import Roact from '@rbxts/roact';
import { Theme, ThemeColors } from '..';
import Scheme from '../material-color';
import ThemeContext from './ThemeContext';

const DefaultThemeColor = ThemeColors.Orange.Color;

interface ControllerState {
	Theme: Theme;
	Colors: Scheme['Colors'];
	_Color: Color3;
	SetTheme: (theme: Theme) => void;
	SetColor: (color3: Color3) => void;
}

interface ControllerProps {
	Theme?: {
		Theme: Theme;
		Color: Color3;
	};
}

// Theme controller without any remote events, for use in Hoarcekat
export default class MockThemeController extends Roact.Component<ControllerProps, ControllerState> {
	state = {
		Theme: Theme.Dark,
		Colors: Scheme.dark(DefaultThemeColor).Colors,
		_Color: DefaultThemeColor,
		SetTheme: (theme: Theme) => this.setTheme(theme),
		SetColor: (color3: Color3) => this.setColor(color3),
	};

	constructor(props: ControllerProps) {
		super(props);

		if (props.Theme) {
			const theme = props.Theme;

			this.setState({
				Theme: theme.Theme,
				Colors: theme.Theme === Theme.Dark ? Scheme.dark(theme.Color).Colors : Scheme.light(theme.Color).Colors,
				_Color: theme.Color,
			});
		}
	}

	public async setTheme(theme: Theme) {
		this.setState({
			Theme: theme,
			Colors:
				theme === Theme.Dark ? Scheme.dark(this.state._Color).Colors : Scheme.light(this.state._Color).Colors,
		});
	}

	public async setColor(color3: Color3) {
		this.setState({
			_Color: color3,
			Colors: this.state.Theme === Theme.Dark ? Scheme.dark(color3).Colors : Scheme.light(color3).Colors,
		});
	}

	public render(): Roact.Element | undefined {
		return <ThemeContext.Provider value={this.state}>{this.props[Roact.Children]}</ThemeContext.Provider>;
	}
}
