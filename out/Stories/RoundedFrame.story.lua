-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local RoundedFrame = TS.import(script, script.Parent.Parent, "RoundedFrame").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createElement(RoundedFrame, {
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.fromScale(0.5, 0.6),
		CornerRadius = 16,
		Color = DefaultTheme.Scheme.surfaceVariant,
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
