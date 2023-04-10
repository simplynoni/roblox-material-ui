-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local IconButton = TS.import(script, script.Parent.Parent, "IconButton").default
local Icons = TS.import(script, script.Parent.Parent, "Icons").Icons
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local component = (Roact.createFragment({
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 24),
		}),
		Roact.createElement(IconButton, {
			Theme = DefaultTheme,
			Size = UDim2.fromOffset(36, 36),
			Icon = Icons.Palette,
			IconColor = DefaultTheme.Scheme.primary,
			Pressed = function() end,
		}),
		Roact.createElement(IconButton, {
			Theme = DefaultTheme,
			Size = UDim2.fromOffset(36, 36),
			Icon = Icons.Palette,
			IconColor = DefaultTheme.Scheme.secondary,
			Pressed = function() end,
		}),
		Roact.createElement(IconButton, {
			Theme = DefaultTheme,
			Size = UDim2.fromOffset(36, 36),
			Icon = Icons.Palette,
			IconColor = DefaultTheme.Scheme.tertiary,
			Pressed = function() end,
		}),
	}))
	local tree = Roact.mount(component, frame)
	return function()
		Roact.unmount(tree)
	end
end
