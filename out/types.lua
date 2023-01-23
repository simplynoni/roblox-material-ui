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
return {
	Theme = Theme,
	ColorScheme = ColorScheme,
	LowerCaseColorScheme = LowerCaseColorScheme,
	ContainerScheme = ContainerScheme,
	LowerCaseContainerScheme = LowerCaseContainerScheme,
}
