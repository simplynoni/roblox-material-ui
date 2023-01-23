-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Icons = TS.import(script, script.Parent.Parent, "Icons").Icons
local SwitchTile = TS.import(script, script.Parent.Parent, "SwitchTile").default
local UIBase = TS.import(script, script.Parent.Parent, "UIBase").default
return function(frame)
	local Tree = Roact.mount(Roact.createElement(UIBase, {
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
			Title = "Switch",
			Enabled = true,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Enabled = false,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Description = "Description",
			Enabled = false,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Description = "Description",
			Icon = Icons.Palette,
			Enabled = false,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Icon = Icons.Palette,
			Enabled = false,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
