// import Log, { Logger } from '@rbxts/log';
import Roact from '@rbxts/roact';
import { DefaultThemeColor, Theme } from '..';
import Scheme from '../material-color';
import ThemeContext from './ThemeContext';

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

export default class ThemeController extends Roact.Component<ControllerProps, ControllerState> {
	state = {
		Theme: Theme.Dark,
		Colors: Scheme.dark(DefaultThemeColor.Color).Colors,
		_Color: DefaultThemeColor.Color,
		SetTheme: (theme: Theme) => this.setTheme(theme),
		SetColor: (color3: Color3) => this.setColor(color3),
	};

	// logger: Logger;

	constructor(props: ControllerProps) {
		super(props);

		// this.logger = Log.ForContext(ThemeController);

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
		// const { Success } = await Functions.setUITheme({ Theme: theme, Color: this.state._Color });

		// //@TODO: Give player notification if there is an error
		// if (!Success) {
		// 	this.logger.Error('Error saving theme!');
		// }

		//Still change the theme even if there is an error on the server (?)
		this.setState({
			Theme: theme,
			Colors:
				theme === Theme.Dark ? Scheme.dark(this.state._Color).Colors : Scheme.light(this.state._Color).Colors,
		});
	}

	public async setColor(color3: Color3) {
		// const { Success } = await Functions.setUITheme({ Theme: this.state.Theme, Color: color3 });

		// if (!Success) {
		// 	this.logger.Error('Error saving color!');
		// }

		this.setState({
			_Color: color3,
			Colors: this.state.Theme === Theme.Dark ? Scheme.dark(color3).Colors : Scheme.light(color3).Colors,
		});
	}

	public render(): Roact.Element | undefined {
		return <ThemeContext.Provider value={this.state}>{this.props[Roact.Children]}</ThemeContext.Provider>;
	}
}
