-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local Linear = _flipper.Linear
local SingleMotor = _flipper.SingleMotor
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local _Fonts = TS.import(script, script.Parent, "Fonts")
local Gotham = _Fonts.Gotham
local GothamBold = _Fonts.GothamBold
local Icon = TS.import(script, script.Parent, "Icon").default
local Switch = TS.import(script, script.Parent, "Switch").default
local SwitchTile
do
	SwitchTile = Roact.PureComponent:extend("SwitchTile")
	function SwitchTile:init(props)
		self.stateMotor = SingleMotor.new(0)
		local stateBinding, setStateBinding = Roact.createBinding(self.stateMotor:getValue())
		self.stateBinding = stateBinding
		self.stateMotor:onStep(setStateBinding)
		self:setState({
			Enabled = self.props.Enabled,
			Debounce = false,
			Icon = self.props.Icon,
		})
	end
	function SwitchTile:render()
		local theme = self.props.Theme
		local _attributes = {
			key = "SwitchTile",
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size or UDim2.new(1, 0, 0, 72),
			Text = "",
			BorderSizePixel = 0,
			BackgroundTransparency = self.stateBinding:map(function(opacity)
				return 1 - opacity
			end),
			BackgroundColor3 = theme.Scheme.onBackground,
			AutoButtonColor = false,
			[Roact.Event.MouseButton1Click] = TS.async(function()
				if self.state.Debounce == false then
					self:setState({
						Debounce = true,
					})
					self:setEnabled(not self.state.Enabled)
					TS.await(TS.Promise.delay(0.25))
					self:setState({
						Debounce = false,
					})
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
			key = "LeftAlign",
			AnchorPoint = Vector2.new(0, 0.5),
			Position = UDim2.fromScale(0, 0.5),
			Size = UDim2.fromScale(0.75, 1),
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
			key = "TextHolder",
			Size = UDim2.fromScale(if self.state.Icon then 0.8 else 1, 1),
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
			Roact.createElement("TextLabel", {
				key = "Title",
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
		local _child_1 = if _value ~= "" and _value then (Roact.createElement("TextLabel", {
			key = "Description",
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
		})) else nil
		if _child_1 then
			_children_2[_length_2 + 1] = _child_1
		end
		_children_1[_length_1 + 1] = Roact.createElement("Frame", _attributes_2, _children_2)
		_children[_length + 1] = Roact.createElement("Frame", _attributes_1, _children_1)
		_children[_length + 2] = Roact.createElement(Switch, {
			Theme = theme,
			Enabled = self.state.Enabled,
			AnchorPoint = Vector2.new(1, 0.5),
			Position = UDim2.fromScale(1, 0.5),
			ChangedEvent = function(enabled)
				self:setEnabled(enabled)
			end,
		})
		return Roact.createElement("TextButton", _attributes, _children)
	end
	function SwitchTile:setEnabled(enabled)
		if self.state.Enabled ~= enabled then
			if self.props.ChangedEvent then
				self.props.ChangedEvent(enabled)
			end
			if self.state.Enabled == false then
				if self.props.OnEvent then
					self.props.OnEvent()
				end
			else
				if self.props.OffEvent then
					self.props.OffEvent()
				end
			end
			self:setState({
				Enabled = enabled,
			})
		end
	end
	function SwitchTile:didUpdate(previousProps)
		if self.props.Enabled ~= previousProps.Enabled then
			self:setEnabled(self.props.Enabled)
		end
		if self.props.Icon ~= previousProps.Icon then
			self:setState({
				Icon = self.props.Icon,
			})
		end
	end
end
return {
	default = SwitchTile,
}
