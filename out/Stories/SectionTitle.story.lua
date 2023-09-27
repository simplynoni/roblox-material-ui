-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local SectionTitle = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "SectionTitle").default
local UIBase = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "UIBase").default
local DefaultTheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Stories", "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createElement(UIBase, {
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.fromScale(0.5, 0.6),
		Theme = DefaultTheme,
	}, {
		Roact.createElement(SectionTitle, {
			Text = "Section Title",
			MaxTextSize = 16,
			Theme = DefaultTheme,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
