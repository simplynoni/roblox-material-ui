-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_rodux = TS.import(script, TS.getModule(script, "@rbxts", "roact-rodux").src)
local connect = _roact_rodux.connect
local StoreProvider = _roact_rodux.StoreProvider
local GothamBold = TS.import(script, script.Parent, "Fonts").GothamBold
local IconButton = TS.import(script, script.Parent, "IconButton").default
local Icons = TS.import(script, script.Parent, "Icons").Icons
local ThemeStore = TS.import(script, script.Parent, "Theme", "ThemeState").ThemeStore
local Topbar
do
	Topbar = Roact.PureComponent:extend("Topbar")
	function Topbar:init()
	end
	function Topbar:render()
		local theme = self.props.Theme
		local closeButton = if self.props.CloseFunction then (Roact.createElement(IconButton, {
			Size = UDim2.fromScale(0, 1),
			LayoutOrder = 100,
			Icon = Icons.Close,
			Pressed = self.props.CloseFunction,
		})) else nil
		local leadingButton = if self.props.LeadingIcon then (Roact.createElement(IconButton, {
			Size = UDim2.fromScale(0, 1),
			LayoutOrder = 0,
			Icon = self.props.LeadingIcon.Icon,
			Pressed = self.props.LeadingIcon.Function,
		})) else nil
		local _attributes = {
			AnchorPoint = Vector2.new(0.5, 0),
			Position = UDim2.fromScale(0.5, 0),
			Size = UDim2.new(UDim.new(1), self.props.Height or UDim.new(0.15)),
			BackgroundTransparency = 1,
		}
		local _children = {}
		local _length = #_children
		local _attributes_1 = {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.fromScale(1, 1),
			BackgroundTransparency = 1,
		}
		local _children_1 = {
			Roact.createElement("UIPadding", {
				PaddingLeft = UDim.new(0, 12),
				PaddingRight = UDim.new(0, 12),
			}),
		}
		local _length_1 = #_children_1
		local _attributes_2 = {
			AnchorPoint = Vector2.new(0, 0.5),
			Position = UDim2.fromScale(0, 0.5),
			Size = UDim2.fromScale(0.35, 0.7),
			BackgroundTransparency = 1,
		}
		local _children_2 = {
			Roact.createElement("UIListLayout", {
				Padding = UDim.new(0, 16),
				FillDirection = Enum.FillDirection.Horizontal,
				VerticalAlignment = Enum.VerticalAlignment.Center,
				HorizontalAlignment = Enum.HorizontalAlignment.Left,
				SortOrder = Enum.SortOrder.LayoutOrder,
			}),
		}
		local _length_2 = #_children_2
		if leadingButton then
			_children_2[_length_2 + 1] = leadingButton
		end
		_children_1.Leading = Roact.createElement("Frame", _attributes_2, _children_2)
		_children_1.Title = Roact.createElement("TextLabel", {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.fromScale(1, 0.5),
			BackgroundTransparency = 1,
			FontFace = GothamBold,
			Text = self.props.Title,
			TextColor3 = theme.Scheme.onBackground,
			TextXAlignment = self.props.TextAlignment,
			RichText = self.props.RichText,
			TextScaled = true,
		}, {
			Roact.createElement("UITextSizeConstraint", {
				MaxTextSize = 22,
			}),
		})
		local _attributes_3 = {
			AnchorPoint = Vector2.new(1, 0.5),
			Position = UDim2.fromScale(1, 0.5),
			Size = UDim2.fromScale(0.35, 0.7),
			BackgroundTransparency = 1,
		}
		local _children_3 = {
			Roact.createElement("UIListLayout", {
				Padding = UDim.new(0, 8),
				FillDirection = Enum.FillDirection.Horizontal,
				VerticalAlignment = Enum.VerticalAlignment.Center,
				HorizontalAlignment = Enum.HorizontalAlignment.Right,
				SortOrder = Enum.SortOrder.LayoutOrder,
			}),
		}
		local _length_3 = #_children_3
		if closeButton then
			_children_3[_length_3 + 1] = closeButton
		end
		_length_3 = #_children_3
		local _child = self.props[Roact.Children]
		if _child then
			for _k, _v in _child do
				if type(_k) == "number" then
					_children_3[_length_3 + _k] = _v
				else
					_children_3[_k] = _v
				end
			end
		end
		_children_1.Trailing = Roact.createElement("Frame", _attributes_3, _children_3)
		_children.Content = Roact.createElement("Frame", _attributes_1, _children_1)
		_children.Divider = Roact.createElement("Frame", {
			AnchorPoint = Vector2.new(0.5, 1),
			Position = UDim2.fromScale(0.5, 1),
			Size = UDim2.new(1, 0, 0, 1),
			BorderSizePixel = 0,
			BackgroundColor3 = theme.Scheme.outline,
		})
		return Roact.createFragment({
			Topbar = Roact.createElement("Frame", _attributes, _children),
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
end)(Topbar)
local ThemedTopbar
do
	ThemedTopbar = Roact.Component:extend("ThemedTopbar")
	function ThemedTopbar:init()
	end
	function ThemedTopbar:render()
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
return {
	default = ThemedTopbar,
}
