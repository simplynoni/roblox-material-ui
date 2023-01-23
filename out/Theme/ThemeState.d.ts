/// <reference types="@rbxts/types" />
/// <reference types="rodux" />
import Rodux from '@rbxts/rodux';
import { Theme } from '../Types';
import Scheme from '../material-color';
export interface ThemeState {
    Theme: Theme;
    Scheme: Scheme['Colors'];
    Color: Color3;
}
interface SetThemeAction extends Rodux.Action<'SetTheme'> {
    Theme: ThemeState['Theme'];
}
declare function SetTheme(theme: SetThemeAction['Theme']): SetThemeAction;
interface SetColorAction extends Rodux.Action<'SetColor'> {
    Color: ThemeState['Color'];
}
declare function SetColor(color: SetColorAction['Color']): SetColorAction;
declare type ThemeActions = SetThemeAction | SetColorAction;
declare const ThemeReducer: Rodux.Reducer<ThemeState, ThemeActions>;
declare const ThemeStore: Rodux.Store<ThemeState, ThemeActions>;
export { SetTheme, SetColor, ThemeReducer, ThemeStore };
