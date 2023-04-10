-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local Linear = _flipper.Linear
local SingleMotor = _flipper.SingleMotor
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _Fonts = TS.import(script, script.Parent, "Fonts")
local Gotham = _Fonts.Gotham
local GothamBold = _Fonts.GothamBold
local Icon = TS.import(script, script.Parent, "Icon").default
local Icons = TS.import(script, script.Parent, "Icons").Icons
local RoundedFrame = TS.import(script, script.Parent, "RoundedFrame").default
local Theme = TS.import(script, script.Parent, "Types").Theme
local ColorTile
do
	ColorTile = Roact.PureComponent:extend("ColorTile")
	function ColorTile:init(props)
		self.stateMotor = SingleMotor.new(0)
		local stateBinding, setStateBinding = Roact.createBinding(self.stateMotor:getValue())
		self.stateBinding = stateBinding
		self.stateMotor:onStep(setStateBinding)
		self:setState({
			Color = self.props.Color,
			Icon = self.props.Icon,
			Selected = self.props.Selected,
		})
	end
	function ColorTile:render()
		local theme = self.props.Theme
		local trailingIcon = if self.props.OpensNewPage then (Roact.createElement(Icon, {
			Icon = Icons.NavigateRight,
			IconSize = "24p",
			MaxSize = true,
			IconColor = theme.Scheme.onBackground,
			Size = UDim2.new(0, 24, 1, 0),
			LayoutOrder = 2,
		})) else nil
		local selectedIcon = if self.state.Selected then (Roact.createElement("ImageLabel", {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.fromScale(1, 1),
			BackgroundColor3 = theme.Scheme.background,
			BackgroundTransparency = if theme.Theme == Theme.Dark then 0.9 else 0.5,
			ImageColor3 = theme.Scheme.onPrimaryContainer,
			Image = Icons.Check,
		}, {
			Roact.createElement("UICorner", {
				CornerRadius = UDim.new(1),
			}),
		})) else nil
		local _attributes = {
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size or UDim2.new(1, 0, 0, 72),
			LayoutOrder = self.props.LayoutOrder,
			Text = "",
			BorderSizePixel = 0,
			BackgroundTransparency = self.stateBinding:map(function(opacity)
				return 1 - opacity
			end),
			BackgroundColor3 = theme.Scheme.onBackground,
			AutoButtonColor = false,
			[Roact.Event.MouseButton1Click] = TS.async(function()
				if self.props.PressedEvent then
					self.props.PressedEvent()
				end
			end),
			[Roact.Event.MouseButton1Up] = TS.async(function()
				self.stateMotor:setGoal(Linear.new(0.08, {
					velocity = 0.5,
				}))
			end),
			[Roact.Event.MouseEnter] = function()
				self.stateMotor:setGoal(Linear.new(0.08, {
					velocity = 0.5,
				}))
			end,
			[Roact.Event.MouseButton1Down] = function()
				self.stateMotor:setGoal(Linear.new(0.12, {
					velocity = 0.5,
				}))
			end,
			[Roact.Event.MouseLeave] = function()
				self.stateMotor:setGoal(Linear.new(0, {
					velocity = 0.5,
				}))
			end,
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
			AnchorPoint = Vector2.new(0, 0.5),
			Position = UDim2.fromScale(0, 0.5),
			Size = UDim2.fromScale(0.65, 1),
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
		local _value = self.props.Description
		local _attributes_2 = {
			Size = UDim2.fromScale(if self.state.Icon then 0.9 else 1, 1),
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
			Title = Roact.createElement("TextLabel", {
				LayoutOrder = 1,
				Size = UDim2.fromScale(1, 0.45),
				BackgroundTransparency = 1,
				FontFace = GothamBold,
				Text = self.props.Title,
				TextColor3 = theme.Scheme.onBackground,
				TextXAlignment = Enum.TextXAlignment.Left,
				TextScaled = true,
			}, {
				Roact.createElement("UITextSizeConstraint", {
					MaxTextSize = 18,
				}),
			}),
		}
		local _length_2 = #_children_2
		local _child_1 = if _value ~= "" and _value then (Roact.createFragment({
			Description = Roact.createElement("TextLabel", {
				LayoutOrder = 2,
				Size = UDim2.fromScale(1, 0.35),
				BackgroundTransparency = 1,
				FontFace = Gotham,
				Text = self.props.Description,
				TextColor3 = theme.Scheme.onBackground,
				TextXAlignment = Enum.TextXAlignment.Left,
				TextScaled = true,
			}, {
				Roact.createElement("UITextSizeConstraint", {
					MaxTextSize = 14,
				}),
			}),
		})) else nil
		if _child_1 then
			_children_2[_length_2 + 1] = _child_1
		end
		_children_1.TextHolder = Roact.createElement("Frame", _attributes_2, _children_2)
		_children.LeftAlign = Roact.createElement("Frame", _attributes_1, _children_1)
		local _attributes_3 = {
			AnchorPoint = Vector2.new(1, 0.5),
			Position = UDim2.fromScale(1, 0.5),
			Size = UDim2.fromScale(0.3, 1),
			BackgroundTransparency = 1,
		}
		local _children_3 = {
			Roact.createElement("UIListLayout", {
				Padding = UDim.new(0, 0),
				FillDirection = Enum.FillDirection.Horizontal,
				HorizontalAlignment = Enum.HorizontalAlignment.Right,
				VerticalAlignment = Enum.VerticalAlignment.Center,
				SortOrder = Enum.SortOrder.LayoutOrder,
			}),
		}
		local _length_3 = #_children_3
		local _attributes_4 = {
			Size = UDim2.new(0, 40, 0.5, 0),
			Color = self.state.Color,
			CornerRadius = "Full",
			BorderSizePixel = 0,
			LayoutOrder = 1,
			Outline = true,
			OutlineColor = theme.Scheme.outline,
		}
		local _children_4 = {
			Roact.createElement("UIAspectRatioConstraint", {
				AspectRatio = 1,
				AspectType = Enum.AspectType.FitWithinMaxSize,
				DominantAxis = Enum.DominantAxis.Height,
			}),
		}
		local _length_4 = #_children_4
		if selectedIcon then
			_children_4[_length_4 + 1] = selectedIcon
		end
		_children_3.Color = Roact.createElement(RoundedFrame, _attributes_4, _children_4)
		if trailingIcon then
			_children_3[_length_3 + 1] = trailingIcon
		end
		_children.RightAlign = Roact.createElement("Frame", _attributes_3, _children_3)
		return Roact.createFragment({
			ColorTile = Roact.createElement("TextButton", _attributes, _children),
		})
	end
	function ColorTile:didUpdate(previousProps)
		if self.props.Color ~= previousProps.Color then
			self:setState({
				Color = self.props.Color,
			})
		end
		if self.props.Icon ~= previousProps.Icon then
			self:setState({
				Icon = self.props.Icon,
			})
		end
		if self.props.Selected ~= previousProps.Selected then
			self:setState({
				Selected = self.props.Selected,
			})
		end
	end
end
return {
	default = ColorTile,
}
