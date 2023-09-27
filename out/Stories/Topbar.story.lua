-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local Icons = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Icons").Icons
local Topbar = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Topbar").default
local UIBase = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "UIBase").default
local DefaultTheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Stories", "DefaultTheme").default
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
			Theme = DefaultTheme,
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
				Theme = DefaultTheme,
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
