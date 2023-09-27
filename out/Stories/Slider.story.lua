-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local GothamBlack = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Fonts").GothamBlack
local Slider = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Slider").default
local DefaultTheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Stories", "DefaultTheme").default
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
