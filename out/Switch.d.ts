/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
interface SwitchProps {
    Enabled: boolean;
    AnchorPoint?: Vector2;
    Position?: UDim2;
    OnEvent?: () => void;
    OffEvent?: () => void;
    ChangedEvent?: (Enabled: boolean) => void;
}
export default class ThemedSwitch extends Roact.Component<SwitchProps> {
    render(): Roact.Element;
}
export {};
