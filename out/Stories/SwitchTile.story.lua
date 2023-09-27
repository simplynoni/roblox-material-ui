-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local Icons = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Icons").Icons
local SwitchTile = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "SwitchTile").default
local UIBase = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "UIBase").default
local DefaultTheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Stories", "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createElement(UIBase, {
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.fromScale(0.4, 0.6),
		Theme = DefaultTheme,
	}, {
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Top,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 0),
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Enabled = true,
			Theme = DefaultTheme,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Enabled = false,
			Theme = DefaultTheme,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Description = "Description",
			Enabled = false,
			Theme = DefaultTheme,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Description = "Description",
			Icon = Icons.Palette,
			Enabled = false,
			Theme = DefaultTheme,
		}),
		Roact.createElement(SwitchTile, {
			Title = "Switch",
			Icon = Icons.Palette,
			Enabled = false,
			Theme = DefaultTheme,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
