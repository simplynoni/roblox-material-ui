/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/types" />
/// <reference types="roact" />
import Roact from '@rbxts/roact';
import { Icons } from './Icons';
interface SwitchTileProps {
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
export default class ThemedSwitchTile extends Roact.Component<SwitchTileProps> {
    render(): Roact.Element;
}
export {};
