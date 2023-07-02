-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Icons = TS.import(script, script.Parent.Parent, "Icons")
local Topbar = TS.import(script, script.Parent.Parent, "Topbar").default
local UIBase = TS.import(script, script.Parent.Parent, "UIBase").default
local DefaultTheme = TS.import(script, script.Parent, "DefaultTheme").default
local Component
do
	Component = Roact.Component:extend("Component")
	function Component:init()
		self.state = {
			Closed = false,
		}
	end
	function Component:render()
		return Roact.createElement(UIBase, {
			Theme = DefaultTheme,
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.fromScale(0.5, 0.6),
			Closed = self.state.Closed,
		}, {
			Roact.createElement(Topbar, {
				Theme = DefaultTheme,
				Title = "Topbar",
				CloseFunction = function()
					self:setState({
						Closed = true,
					})
					task.wait(2)
					self:setState({
						Closed = false,
					})
				end,
				LeadingIcon = {
					Icon = Icons.navigate_before,
					Function = function() end,
				},
			}),
		})
	end
end
return function(frame)
	local tree = Roact.mount(Roact.createElement(Component), frame)
	return function()
		Roact.unmount(tree)
	end
end
