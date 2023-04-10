import { ThemeState } from './Theme/ThemeState';
export interface ThemeProps {
    Theme: ThemeState;
}
export declare enum Theme {
    Light = "Light",
    Dark = "Dark"
}
export declare enum ColorScheme {
    Primary = "Primary",
    Secondary = "Secondary",
    Tertiary = "Tertiary",
    Error = "Error"
}
export declare enum LowerCaseColorScheme {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Error = "error"
}
export declare enum ContainerScheme {
    PrimaryContainer = "PrimaryContainer",
    SecondaryContainer = "SecondaryContainer",
    TertiaryContainer = "TertiaryContainer",
    ErrorContainer = "ErrorContainer"
}
export declare enum LowerCaseContainerScheme {
    PrimaryContainer = "primaryContainer",
    SecondaryContainer = "secondaryContainer",
    TertiaryContainer = "tertiaryContainer",
    ErrorContainer = "errorContainer"
}
