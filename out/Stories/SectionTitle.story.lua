-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local SectionTitle = TS.import(script, script.Parent.Parent, "SectionTitle").default
local UIBase = TS.import(script, script.Parent.Parent, "UIBase").default
return function(frame)
	local Tree = Roact.mount(Roact.createElement(UIBase, {
		AnchorPoint = Vector2.new(0.5, 0.5),
		Position = UDim2.fromScale(0.5, 0.5),
		Size = UDim2.fromScale(0.5, 0.6),
	}, {
		Roact.createElement(SectionTitle, {
			Text = "Section Title",
			MaxTextSize = 16,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
