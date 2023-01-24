import Rodux from '@rbxts/rodux';
import { DefaultThemeColor } from '../Constants';
import { Theme } from '../types';
import Scheme from '../material-color';

export interface ThemeState {
	Theme: Theme;
	Scheme: Scheme['Colors'];
	Color: Color3;
}

interface SetThemeAction extends Rodux.Action<'SetTheme'> {
	Theme: ThemeState['Theme'];
}

function SetTheme(theme: SetThemeAction['Theme']): SetThemeAction {
	return {
		type: 'SetTheme',
		Theme: theme,
	};
}

interface SetColorAction extends Rodux.Action<'SetColor'> {
	Color: ThemeState['Color'];
}

function SetColor(color: SetColorAction['Color']): SetColorAction {
	return {
		type: 'SetColor',
		Color: color,
	};
}

type ThemeActions = SetThemeAction | SetColorAction;

const ThemeReducer = Rodux.createReducer<ThemeState, ThemeActions>(
	{
		Theme: Theme.Dark,
		Color: DefaultThemeColor,
		Scheme: Scheme.dark(DefaultThemeColor).Colors,
	},
	{
		SetTheme: (state, action) => {
			if (action.Theme === state.Theme) {
				return state;
			} else {
				const scheme =
					action.Theme === Theme.Light ? Scheme.light(state.Color).Colors : Scheme.dark(state.Color).Colors;

				return {
					Theme: action.Theme,
					Color: state.Color,
					Scheme: scheme,
				};
			}
		},
		SetColor: (state, action) => {
			if (action.Color === state.Color) {
				return state;
			} else {
				const scheme =
					state.Theme === Theme.Light ? Scheme.light(action.Color).Colors : Scheme.dark(action.Color).Colors;

				return {
					Theme: state.Theme,
					Color: action.Color,
					Scheme: scheme,
				};
			}
		},
	},
);

const ThemeStore = new Rodux.Store<ThemeState, ThemeActions>(ThemeReducer);

export { SetTheme, SetColor, ThemeReducer, ThemeStore };
