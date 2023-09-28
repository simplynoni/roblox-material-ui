-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local Icon = TS.import(script, script.Parent.Parent, "Icon").default
local Icons = TS.import(script, script.Parent.Parent, "Icons").Icons
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createFragment({
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 24),
		}),
		Roact.createElement(Icon, {
			Size = UDim2.fromOffset(24, 24),
			Icon = Icons.Palette,
			IconSize = "24p",
			IconColor = DefaultTheme.Scheme.primary,
		}),
		Roact.createElement(Icon, {
			Size = UDim2.fromOffset(24, 24),
			Icon = Icons.Palette,
			IconSize = "24p",
			IconColor = DefaultTheme.Scheme.secondary,
		}),
		Roact.createElement(Icon, {
			Size = UDim2.fromOffset(24, 24),
			Icon = Icons.Palette,
			IconSize = "24p",
			IconColor = DefaultTheme.Scheme.tertiary,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
