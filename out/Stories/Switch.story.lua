-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Switch = TS.import(script, script.Parent.Parent, "Switch").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
return function(frame)
	local component = (Roact.createFragment({
		Roact.createElement("UIListLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			Padding = UDim.new(0, 24),
		}),
		Roact.createElement(Switch, {
			Theme = DefaultTheme,
			Enabled = true,
		}),
		Roact.createElement(Switch, {
			Theme = DefaultTheme,
			Enabled = false,
		}),
	}))
	local tree = Roact.mount(component, frame)
	return function()
		Roact.unmount(tree)
	end
end
