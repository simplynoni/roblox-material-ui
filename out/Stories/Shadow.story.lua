-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_rodux = TS.import(script, TS.getModule(script, "@rbxts", "roact-rodux").src)
local connect = _roact_rodux.connect
local StoreProvider = _roact_rodux.StoreProvider
local RoundedFrame = TS.import(script, script.Parent.Parent, "RoundedFrame").default
local Shadow = TS.import(script, script.Parent.Parent, "Shadow").default
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
			Roact.createElement("UIGridLayout", {
				VerticalAlignment = Enum.VerticalAlignment.Center,
				HorizontalAlignment = Enum.HorizontalAlignment.Center,
				CellSize = UDim2.fromOffset(150, 150),
				CellPadding = UDim2.fromOffset(24, 24),
			}),
			Roact.createElement("Frame", {
				BackgroundTransparency = 1,
			}, {
				Roact.createElement(Shadow, {
					Elevation = 1,
				}),
				Roact.createElement(RoundedFrame, {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(1, 1),
					Color = theme.Scheme.background,
					CornerRadius = 16,
				}, {
					Roact.createElement("TextLabel", {
						AnchorPoint = Vector2.new(0.5, 0.5),
						Position = UDim2.fromScale(0.5, 0.5),
						Size = UDim2.fromScale(0.5, 0.5),
						BackgroundTransparency = 1,
						Text = "Elevation 1",
						Font = Enum.Font.GothamBold,
						TextSize = 16,
						TextTransparency = 0.5,
						TextColor3 = theme.Scheme.onBackground,
					}),
				}),
			}),
			Roact.createElement("Frame", {
				BackgroundTransparency = 1,
			}, {
				Roact.createElement(Shadow, {
					Elevation = 2,
				}),
				Roact.createElement(RoundedFrame, {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(1, 1),
					Color = theme.Scheme.background,
					CornerRadius = 16,
				}, {
					Roact.createElement("TextLabel", {
						AnchorPoint = Vector2.new(0.5, 0.5),
						Position = UDim2.fromScale(0.5, 0.5),
						Size = UDim2.fromScale(0.5, 0.5),
						BackgroundTransparency = 1,
						Text = "Elevation 2",
						Font = Enum.Font.GothamBold,
						TextSize = 16,
						TextTransparency = 0.5,
						TextColor3 = theme.Scheme.onBackground,
					}),
				}),
			}),
			Roact.createElement("Frame", {
				BackgroundTransparency = 1,
			}, {
				Roact.createElement(Shadow, {
					Elevation = 3,
				}),
				Roact.createElement(RoundedFrame, {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(1, 1),
					Color = theme.Scheme.background,
					CornerRadius = 16,
				}, {
					Roact.createElement("TextLabel", {
						AnchorPoint = Vector2.new(0.5, 0.5),
						Position = UDim2.fromScale(0.5, 0.5),
						Size = UDim2.fromScale(0.5, 0.5),
						BackgroundTransparency = 1,
						Text = "Elevation 3",
						Font = Enum.Font.GothamBold,
						TextSize = 16,
						TextTransparency = 0.5,
						TextColor3 = theme.Scheme.onBackground,
					}),
				}),
			}),
			Roact.createElement("Frame", {
				BackgroundTransparency = 1,
			}, {
				Roact.createElement(Shadow, {
					Elevation = 4,
				}),
				Roact.createElement(RoundedFrame, {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(1, 1),
					Color = theme.Scheme.background,
					CornerRadius = 16,
				}, {
					Roact.createElement("TextLabel", {
						AnchorPoint = Vector2.new(0.5, 0.5),
						Position = UDim2.fromScale(0.5, 0.5),
						Size = UDim2.fromScale(0.5, 0.5),
						BackgroundTransparency = 1,
						Text = "Elevation 4",
						Font = Enum.Font.GothamBold,
						TextSize = 16,
						TextTransparency = 0.5,
						TextColor3 = theme.Scheme.onBackground,
					}),
				}),
			}),
			Roact.createElement("Frame", {
				BackgroundTransparency = 1,
			}, {
				Roact.createElement(Shadow, {
					Elevation = 5,
				}),
				Roact.createElement(RoundedFrame, {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(1, 1),
					Color = theme.Scheme.background,
					CornerRadius = 16,
				}, {
					Roact.createElement("TextLabel", {
						AnchorPoint = Vector2.new(0.5, 0.5),
						Position = UDim2.fromScale(0.5, 0.5),
						Size = UDim2.fromScale(0.5, 0.5),
						BackgroundTransparency = 1,
						Text = "Elevation 5",
						Font = Enum.Font.GothamBold,
						TextSize = 16,
						TextTransparency = 0.5,
						TextColor3 = theme.Scheme.onBackground,
					}),
				}),
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
