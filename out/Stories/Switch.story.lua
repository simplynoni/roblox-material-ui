-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Switch = TS.import(script, script.Parent.Parent, "Switch").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
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
