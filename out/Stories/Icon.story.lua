-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_rodux = TS.import(script, TS.getModule(script, "@rbxts", "roact-rodux").src)
local connect = _roact_rodux.connect
local StoreProvider = _roact_rodux.StoreProvider
local Icon = TS.import(script, script.Parent.Parent, "Icon").default
local Icons = TS.import(script, script.Parent.Parent, "Icons").Icons
local ThemeStore = TS.import(script, script.Parent.Parent, "Theme", "ThemeState").ThemeStore
local StoryComponent
do
	StoryComponent = Roact.Component:extend("StoryComponent")
	function StoryComponent:init()
		self.state = {
			Closed = false,
		}
	end
	function StoryComponent:render()
		local theme = self.props.Theme
		return Roact.createFragment({
			Roact.createElement("UIListLayout", {
				VerticalAlignment = Enum.VerticalAlignment.Center,
				HorizontalAlignment = Enum.HorizontalAlignment.Center,
				Padding = UDim.new(0, 24),
			}),
			Roact.createElement(Icon, {
				Size = UDim2.fromOffset(24, 24),
				Icon = Icons.Palette,
				IconSize = "24p",
				IconColor = theme.Scheme.primary,
			}),
			Roact.createElement(Icon, {
				Size = UDim2.fromOffset(24, 24),
				Icon = Icons.Palette,
				IconSize = "24p",
				IconColor = theme.Scheme.secondary,
			}),
			Roact.createElement(Icon, {
				Size = UDim2.fromOffset(24, 24),
				Icon = Icons.Palette,
				IconSize = "24p",
				IconColor = theme.Scheme.tertiary,
			}),
		})
	end
end
local Connected = connect(function(state)
	local _object = {}
	local _left = "Theme"
	local _object_1 = {}
	for _k, _v in state do
		_object_1[_k] = _v
	end
	_object[_left] = _object_1
	return _object
end)(StoryComponent)
local ThemedStoryComponent
do
	ThemedStoryComponent = Roact.Component:extend("ThemedStoryComponent")
	function ThemedStoryComponent:init()
	end
	function ThemedStoryComponent:render()
		local _attributes = {
			store = ThemeStore,
		}
		local _children = {}
		local _length = #_children
		local _attributes_1 = {}
		for _k, _v in self.props do
			_attributes_1[_k] = _v
		end
		_children[_length + 1] = Roact.createElement(Connected, _attributes_1)
		return Roact.createElement(StoreProvider, _attributes, _children)
	end
end
return function(frame)
	local Tree = Roact.mount(Roact.createElement(ThemedStoryComponent), frame)
	return function()
		Roact.unmount(Tree)
	end
end
