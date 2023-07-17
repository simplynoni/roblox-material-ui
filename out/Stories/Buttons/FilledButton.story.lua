-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local FilledButton = TS.import(script, script.Parent.Parent.Parent, "Buttons").FilledButton
local Icons = TS.import(script, script.Parent.Parent.Parent, "Icons").Icons
local UIBase = TS.import(script, script.Parent.Parent.Parent, "UIBase").default
local DefaultTheme = TS.import(script, script.Parent.Parent, "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createElement(UIBase, {
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.fromScale(0.3, 0.55),
		Theme = DefaultTheme,
	}, {
		Roact.createElement("UIListLayout", {
			SortOrder = Enum.SortOrder.LayoutOrder,
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 20),
		}),
		Roact.createElement(FilledButton, {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			AutomaticSize = true,
			Text = "AutomaticSize Button",
			Pressed = function()
				print("a")
			end,
			Theme = DefaultTheme,
		}),
		Roact.createElement(FilledButton, {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			AutomaticSize = true,
			Text = "AutomaticSize Button w/ Icon",
			Icon = Icons.DarkTheme,
			Pressed = function()
				print("a")
			end,
			Theme = DefaultTheme,
		}),
		Roact.createElement(FilledButton, {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.new(0.75, 0, 0, 35),
			Text = "Custom Size Button",
			Pressed = function()
				print("a")
			end,
			Theme = DefaultTheme,
		}),
		Roact.createElement(FilledButton, {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			AutomaticSize = true,
			Text = "Disabled Button",
			Disabled = true,
			Pressed = function()
				print("a")
			end,
			Theme = DefaultTheme,
		}),
		Roact.createElement(FilledButton, {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			AutomaticSize = true,
			Text = "Disabled Button w/ Icon",
			Disabled = true,
			Icon = Icons.DarkTheme,
			Pressed = function()
				print("a")
			end,
			Theme = DefaultTheme,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
