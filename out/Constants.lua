-- Compiled with roblox-ts v2.0.4
local Theme
do
	local _inverse = {}
	Theme = setmetatable({}, {
		__index = _inverse,
	})
	Theme.Light = "Light"
	_inverse.Light = "Light"
	Theme.Dark = "Dark"
	_inverse.Dark = "Dark"
end
local ColorScheme
do
	local _inverse = {}
	ColorScheme = setmetatable({}, {
		__index = _inverse,
	})
	ColorScheme.Primary = "Primary"
	_inverse.Primary = "Primary"
	ColorScheme.Secondary = "Secondary"
	_inverse.Secondary = "Secondary"
	ColorScheme.Tertiary = "Tertiary"
	_inverse.Tertiary = "Tertiary"
	ColorScheme.Error = "Error"
	_inverse.Error = "Error"
end
-- Theres probably a better way to do this but whatever
local LowerCaseColorScheme
do
	local _inverse = {}
	LowerCaseColorScheme = setmetatable({}, {
		__index = _inverse,
	})
	LowerCaseColorScheme.Primary = "primary"
	_inverse.primary = "Primary"
	LowerCaseColorScheme.Secondary = "secondary"
	_inverse.secondary = "Secondary"
	LowerCaseColorScheme.Tertiary = "tertiary"
	_inverse.tertiary = "Tertiary"
	LowerCaseColorScheme.Error = "error"
	_inverse.error = "Error"
end
local ContainerScheme
do
	local _inverse = {}
	ContainerScheme = setmetatable({}, {
		__index = _inverse,
	})
	ContainerScheme.PrimaryContainer = "PrimaryContainer"
	_inverse.PrimaryContainer = "PrimaryContainer"
	ContainerScheme.SecondaryContainer = "SecondaryContainer"
	_inverse.SecondaryContainer = "SecondaryContainer"
	ContainerScheme.TertiaryContainer = "TertiaryContainer"
	_inverse.TertiaryContainer = "TertiaryContainer"
	ContainerScheme.ErrorContainer = "ErrorContainer"
	_inverse.ErrorContainer = "ErrorContainer"
end
local LowerCaseContainerScheme
do
	local _inverse = {}
	LowerCaseContainerScheme = setmetatable({}, {
		__index = _inverse,
	})
	LowerCaseContainerScheme.PrimaryContainer = "primaryContainer"
	_inverse.primaryContainer = "PrimaryContainer"
	LowerCaseContainerScheme.SecondaryContainer = "secondaryContainer"
	_inverse.secondaryContainer = "SecondaryContainer"
	LowerCaseContainerScheme.TertiaryContainer = "tertiaryContainer"
	_inverse.tertiaryContainer = "TertiaryContainer"
	LowerCaseContainerScheme.ErrorContainer = "errorContainer"
	_inverse.errorContainer = "ErrorContainer"
end
local ThemeColors = {
	Red = {
		Color = Color3.fromHex("#ff2b2b"),
		Order = 1,
	},
	Orange = {
		Color = Color3.fromHex("#ff802b"),
		Order = 2,
	},
	Yellow = {
		Color = Color3.fromHex("#ffde2b"),
		Order = 3,
	},
	Green = {
		Color = Color3.fromHex("#3dff2b"),
		Order = 4,
	},
	Teal = {
		Color = Color3.fromHex("#2bffff"),
		Order = 5,
	},
	Blue = {
		Color = Color3.fromHex("#2b38ff"),
		Order = 6,
	},
	Purple = {
		Color = Color3.fromHex("#7d2bff"),
		Order = 7,
	},
	Pink = {
		Color = Color3.fromHex("#ff3db5"),
		Order = 8,
	},
}
local DefaultThemeColor = ThemeColors.Orange
return {
	Theme = Theme,
	ColorScheme = ColorScheme,
	LowerCaseColorScheme = LowerCaseColorScheme,
	ContainerScheme = ContainerScheme,
	LowerCaseContainerScheme = LowerCaseContainerScheme,
	ThemeColors = ThemeColors,
	DefaultThemeColor = DefaultThemeColor,
}
