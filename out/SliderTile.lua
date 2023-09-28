-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local _Fonts = TS.import(script, script.Parent, "Fonts")
local Gotham = _Fonts.Gotham
local GothamBold = _Fonts.GothamBold
local Icon = TS.import(script, script.Parent, "Icon").default
local Slider = TS.import(script, script.Parent, "Slider").default
local SliderTile
do
	SliderTile = Roact.PureComponent:extend("SliderTile")
	function SliderTile:init()
		self.state = {
			Icon = self.props.Icon,
			DisplayValue = self.props.Value,
		}
	end
	function SliderTile:render()
		local theme = self.props.Theme
		local _attributes = {
			key = "SliderTile",
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size or UDim2.new(1, 0, 0, 72),
			BorderSizePixel = 0,
			BackgroundTransparency = 1,
		}
		local _children = {
			Roact.createElement("UIPadding", {
				PaddingBottom = UDim.new(0, 12),
				PaddingLeft = UDim.new(0, 16),
				PaddingRight = UDim.new(0, 16),
				PaddingTop = UDim.new(0, 12),
			}),
		}
		local _length = #_children
		local _attributes_1 = {
			key = "LeftAlign",
			AnchorPoint = Vector2.new(0, 0.5),
			Position = UDim2.fromScale(0, 0.5),
			Size = UDim2.fromScale(1, 1),
			BackgroundTransparency = 1,
		}
		local _children_1 = {
			Roact.createElement("UIListLayout", {
				Padding = UDim.new(0, 16),
				FillDirection = Enum.FillDirection.Horizontal,
				HorizontalAlignment = Enum.HorizontalAlignment.Left,
				VerticalAlignment = Enum.VerticalAlignment.Center,
				SortOrder = Enum.SortOrder.LayoutOrder,
			}),
		}
		local _length_1 = #_children_1
		local _child = if self.state.Icon then (Roact.createElement(Icon, {
			Icon = self.state.Icon,
			IconSize = "24p",
			MaxSize = true,
			IconColor = theme.Scheme.onBackground,
			Size = UDim2.fromScale(0.25, 1),
			LayoutOrder = 1,
		})) else nil
		if _child then
			_children_1[_length_1 + 1] = _child
		end
		_length_1 = #_children_1
		local _attributes_2 = {
			key = "MainHolder",
			Size = UDim2.new(1, if self.state.Icon then -40 else 0, 1, 0),
			BackgroundTransparency = 1,
			LayoutOrder = 2,
		}
		local _children_2 = {
			Roact.createElement("UIListLayout", {
				Padding = UDim.new(0, 5),
				FillDirection = Enum.FillDirection.Vertical,
				HorizontalAlignment = Enum.HorizontalAlignment.Left,
				VerticalAlignment = Enum.VerticalAlignment.Center,
				SortOrder = Enum.SortOrder.LayoutOrder,
			}),
		}
		local _length_2 = #_children_2
		local _attributes_3 = {
			key = "Title",
			LayoutOrder = 1,
			Size = UDim2.fromScale(1, 0.45),
			BackgroundTransparency = 1,
			FontFace = GothamBold,
			Text = self.props.Title,
			TextColor3 = theme.Scheme.onBackground,
			TextXAlignment = Enum.TextXAlignment.Left,
			TextScaled = true,
		}
		local _children_3 = {
			Roact.createElement("UITextSizeConstraint", {
				MaxTextSize = 18,
			}),
		}
		local _length_3 = #_children_3
		local _child_1 = if self.props.ShowValue then (Roact.createElement("TextLabel", {
			key = "Value",
			AnchorPoint = Vector2.new(1, 0.5),
			Position = UDim2.fromScale(1, 0.5),
			Size = UDim2.fromScale(0.25, 1),
			BackgroundTransparency = 1,
			FontFace = Gotham,
			Text = tostring(self.state.DisplayValue),
			TextColor3 = theme.Scheme.onBackground,
			TextXAlignment = Enum.TextXAlignment.Right,
			TextScaled = true,
		}, {
			Roact.createElement("UITextSizeConstraint", {
				MaxTextSize = 14,
			}),
		})) else nil
		if _child_1 then
			_children_3[_length_3 + 1] = _child_1
		end
		_children_2[_length_2 + 1] = Roact.createElement("TextLabel", _attributes_3, _children_3)
		_children_2[_length_2 + 2] = Roact.createElement(Slider, {
			Theme = theme,
			Value = self.props.Value,
			Steps = self.props.Steps,
			ChangedEvent = function(value)
				if self.props.ChangedEvent then
					task.spawn(self.props.ChangedEvent, value)
				end
				self:setState({
					DisplayValue = math.round(value * 100) / 100,
				})
			end,
			LayoutOrder = 2,
		})
		_children_1[_length_1 + 1] = Roact.createElement("Frame", _attributes_2, _children_2)
		_children[_length + 1] = Roact.createElement("Frame", _attributes_1, _children_1)
		return Roact.createElement("Frame", _attributes, _children)
	end
	function SliderTile:didUpdate(previousProps)
		if previousProps.Icon ~= self.props.Icon then
			self:setState({
				Icon = self.props.Icon,
			})
		end
	end
end
return {
	default = SliderTile,
}
