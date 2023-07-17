-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local GothamBlack = TS.import(script, script.Parent.Parent, "Fonts").GothamBlack
local Icons = TS.import(script, script.Parent.Parent, "Icons").Icons
local SliderTile = TS.import(script, script.Parent.Parent, "SliderTile").default
local UIBase = TS.import(script, script.Parent.Parent, "UIBase").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createFragment({
		Roact.createElement("TextLabel", {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.1),
			Size = UDim2.new(0.5, 0, 0, 16),
			BackgroundTransparency = 1,
			Text = "doesn't work in hoarcekat ui",
			FontFace = GothamBlack,
			TextSize = 16,
			TextTransparency = 0.5,
			TextColor3 = Color3.fromRGB(242, 242, 242),
		}),
		Roact.createElement(UIBase, {
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
			Roact.createElement(SliderTile, {
				Title = "Slider",
				Value = 1,
				Theme = DefaultTheme,
			}),
			Roact.createElement(SliderTile, {
				Title = "Stepped Slider",
				Steps = 10,
				Value = 0,
				ShowValue = true,
				Theme = DefaultTheme,
			}),
			Roact.createElement(SliderTile, {
				Title = "Slider",
				Value = 1,
				ShowValue = true,
				Theme = DefaultTheme,
			}),
			Roact.createElement(SliderTile, {
				Title = "Slider",
				Icon = Icons.Palette,
				Value = 0,
				Theme = DefaultTheme,
			}),
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
