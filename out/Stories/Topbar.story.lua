-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Icons = TS.import(script, script.Parent.Parent, "Icons").Icons
local Topbar = TS.import(script, script.Parent.Parent, "Topbar").default
local UIBase = TS.import(script, script.Parent.Parent, "UIBase").default
local StoryComponent
do
	StoryComponent = Roact.Component:extend("StoryComponent")
	function StoryComponent:init()
		self.state = {
			Closed = false,
		}
	end
	function StoryComponent:render()
		return Roact.createElement(UIBase, {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.fromScale(0.5, 0.6),
			Closed = self.state.Closed,
		}, {
			Roact.createElement(Topbar, {
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
					Icon = Icons.NavigateBack,
					Function = function() end,
				},
			}),
		})
	end
end
return function(frame)
	local Tree = Roact.mount(Roact.createElement(StoryComponent), frame)
	return function()
		Roact.unmount(Tree)
	end
end
