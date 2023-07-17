-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local GothamBlack = TS.import(script, script.Parent.Parent, "Fonts").GothamBlack
local Slider = TS.import(script, script.Parent.Parent, "Slider").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createFragment({
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 24),
		}),
		Roact.createElement("TextLabel", {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.new(0.5, 0, 0, 16),
			BackgroundTransparency = 1,
			Text = "doesn't work in hoarcekat ui",
			FontFace = GothamBlack,
			TextSize = 16,
			TextTransparency = 0.5,
			TextColor3 = Color3.fromRGB(242, 242, 242),
		}),
		Roact.createElement(Slider, {
			Value = 1,
			Steps = 10,
			Size = UDim2.new(0.5, 0, 0, 15),
			Theme = DefaultTheme,
		}),
		Roact.createElement(Slider, {
			Value = 0,
			Steps = 10,
			Size = UDim2.new(0.5, 0, 0, 15),
			Theme = DefaultTheme,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
