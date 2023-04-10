-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Switch = TS.import(script, script.Parent.Parent, "Switch").default
return function(frame)
	local Tree = Roact.mount(Roact.createFragment({
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 24),
		}),
		Roact.createElement(Switch, {
			Enabled = true,
		}),
		Roact.createElement(Switch, {
			Enabled = false,
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
