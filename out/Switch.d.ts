/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import { GroupMotor } from '@rbxts/flipper';
import Roact from '@rbxts/roact';
import { ThemeProps } from './Types';
interface SwitchProps extends ThemeProps {
    Enabled: boolean;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    OnEvent?: () => void;
    OffEvent?: () => void;
    ChangedEvent?: (Enabled: boolean) => void;
}
interface SwitchState {
    Enabled: boolean;
    Debounce: boolean;
}
export default class Switch extends Roact.PureComponent<SwitchProps, SwitchState> {
    positionMotor: GroupMotor<{
        Position: number;
        AnchorPoint: number;
    }>;
    positionBinding: Roact.Binding<{
        Position: number;
        AnchorPoint: number;
    }>;
    constructor(props: SwitchProps);
    render(): Roact.Element;
    private setEnabled;
    protected didUpdate(previousProps: SwitchProps): void;
}
export {};
