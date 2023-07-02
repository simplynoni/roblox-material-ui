-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Icons = TS.import(script, script.Parent.Parent, "Icons")
local SwitchTile = TS.import(script, script.Parent.Parent, "SwitchTile").default
local UIBase = TS.import(script, script.Parent.Parent, "UIBase").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local component = (Roact.createElement(UIBase, {
		Theme = DefaultTheme,
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.fromScale(0.4, 0.6),
	}, {
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Top,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 0),
		}),
		Roact.createElement(SwitchTile, {
			Theme = DefaultTheme,
			Title = "Switch",
			Enabled = true,
		}),
		Roact.createElement(SwitchTile, {
			Theme = DefaultTheme,
			Title = "Switch",
			Enabled = false,
		}),
		Roact.createElement(SwitchTile, {
			Theme = DefaultTheme,
			Title = "Switch",
			Description = "Description",
			Enabled = false,
		}),
		Roact.createElement(SwitchTile, {
			Theme = DefaultTheme,
			Title = "Switch",
			Description = "Description",
			Icon = Icons.palette,
			Enabled = false,
		}),
		Roact.createElement(SwitchTile, {
			Theme = DefaultTheme,
			Title = "Switch",
			Icon = Icons.palette,
			Enabled = false,
		}),
	}))
	local tree = Roact.mount(component, frame)
	return function()
		Roact.unmount(tree)
	end
end
