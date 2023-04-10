-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local RoundedFrame = TS.import(script, script.Parent.Parent, "RoundedFrame").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local component = (Roact.createElement(RoundedFrame, {
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.fromScale(0.5, 0.6),
		CornerRadius = 16,
		Color = DefaultTheme.Scheme.surfaceVariant,
	}))
	local tree = Roact.mount(component, frame)
	return function()
		Roact.unmount(tree)
	end
end
