/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import { SingleMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
import { ThemeProps } from './types';
interface SwitchTileProps extends ThemeProps {
    Enabled: boolean;
    Title: string;
    Icon?: Icons;
    Description?: string;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    Size?: UDim2;
    OnEvent?: () => void;
    OffEvent?: () => void;
    ChangedEvent?: (Enabled: boolean) => void;
}
interface SwitchTileState {
    Enabled: boolean;
    Debounce: boolean;
    Icon?: Icons;
}
export default class SwitchTile extends Roact.PureComponent<SwitchTileProps, SwitchTileState> {
    stateMotor: SingleMotor;
    stateBinding: Roact.Binding<number>;
    constructor(props: SwitchTileProps);
    render(): Roact.Element;
    private setEnabled;
    protected didUpdate(previousProps: SwitchTileProps): void;
}
export {};
