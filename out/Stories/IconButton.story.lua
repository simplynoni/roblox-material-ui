-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local IconButton = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "IconButton").default
local Icons = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Icons").Icons
local DefaultTheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Stories", "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createFragment({
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 24),
		}),
		Roact.createElement(IconButton, {
			Size = UDim2.fromOffset(36, 36),
			Icon = Icons.Palette,
			IconColor = DefaultTheme.Scheme.primary,
			Pressed = function() end,
			Theme = DefaultTheme,
		}),
		Roact.createElement(IconButton, {
			Size = UDim2.fromOffset(36, 36),
			Icon = Icons.Palette,
			IconColor = DefaultTheme.Scheme.secondary,
			Pressed = function() end,
			Theme = DefaultTheme,
		}),
		Roact.createElement(IconButton, {
			Size = UDim2.fromOffset(36, 36),
			Icon = Icons.Palette,
			IconColor = DefaultTheme.Scheme.tertiary,
			Pressed = function() end,
			Theme = DefaultTheme,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
