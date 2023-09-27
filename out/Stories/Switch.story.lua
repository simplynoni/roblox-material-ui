-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local Switch = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Switch").default
local DefaultTheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Stories", "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createFragment({
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 24),
		}),
		Roact.createElement(Switch, {
			Enabled = true,
			Theme = DefaultTheme,
		}),
		Roact.createElement(Switch, {
			Enabled = false,
			Theme = DefaultTheme,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
