-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local GothamMedium = TS.import(script, script.Parent.Parent, "Fonts").GothamMedium
local Icon = TS.import(script, script.Parent.Parent, "Icon").default
local LowerCaseFirstLetter = TS.import(script, script.Parent.Parent, "Utils").LowerCaseFirstLetter
local ContainerScheme = TS.import(script, script.Parent.Parent, "types").ContainerScheme
local ButtonBase = TS.import(script, script.Parent, "ButtonBase").default
local TonalButtonBase
do
	TonalButtonBase = Roact.Component:extend("TonalButtonBase")
	function TonalButtonBase:init()
	end
	function TonalButtonBase:render()
		local theme = self.props.Theme
		local colorScheme = self.props.ColorScheme or ContainerScheme.SecondaryContainer
		local lowerCaseColorScheme = LowerCaseFirstLetter(colorScheme)
		local color = if self.props.CustomColorGroup then self.props.CustomColorGroup.colorContainer else theme.Scheme[lowerCaseColorScheme]
		local onColor = if self.props.CustomColorGroup then self.props.CustomColorGroup.onColorContainer else theme.Scheme["on" .. colorScheme]
		local _value = self.props.Icon
		local icon = if _value ~= "" and _value then (Roact.createElement(Icon, {
			Icon = self.props.Icon,
			IconColor = if self.props.Disabled then theme.Scheme.onBackground else onColor,
			IconTransparency = if self.props.Disabled then 1 - 0.38 else 0,
			IconSize = "24p",
			Size = UDim2.fromScale(0.2, 1),
		})) else nil
		return Roact.createElement(ButtonBase, {
			Disabled = self.props.Disabled,
			Pressed = self.props.Pressed,
			Render = function(renderProps)
				local _attributes = {
					AutoButtonColor = false,
					BackgroundColor3 = if self.props.Disabled then theme.Scheme.onSurface else color,
					BackgroundTransparency = if self.props.Disabled then 1 - 0.12 else 0,
					BorderSizePixel = 0,
					AnchorPoint = self.props.AnchorPoint,
					Position = self.props.Position,
					Size = self.props.Size or UDim2.fromOffset(0, 35),
					Text = "",
					AutomaticSize = if self.props.AutomaticSize then Enum.AutomaticSize.X else nil,
					Interactable = not self.props.Disabled,
					[Roact.Event.MouseButton1Click] = TS.async(function()
						return renderProps.MouseClick()
					end),
					[Roact.Event.MouseButton1Up] = function()
						return renderProps.MouseUp()
					end,
					[Roact.Event.MouseEnter] = function()
						return renderProps.MouseEnter()
					end,
					[Roact.Event.MouseButton1Down] = function()
						return renderProps.MouseDown()
					end,
					[Roact.Event.MouseLeave] = function()
						return renderProps.MouseLeave()
					end,
				}
				local _children = {}
				local _length = #_children
				local _attributes_1 = {
					key = "StateLayer",
					Size = UDim2.fromScale(if self.props.AutomaticSize then 0 else 1, 1),
					AutomaticSize = if self.props.AutomaticSize then Enum.AutomaticSize.X else nil,
					BackgroundColor3 = onColor,
					BackgroundTransparency = renderProps.StateBinding:map(function(opacity)
						return 1 - opacity
					end),
				}
				local _children_1 = {}
				local _length_1 = #_children_1
				local _attributes_2 = {}
				local _value_1 = self.props.Icon
				_attributes_2.PaddingLeft = UDim.new(0, if _value_1 ~= "" and _value_1 then 16 else 24)
				_attributes_2.PaddingRight = UDim.new(0, 24)
				_attributes_2.PaddingBottom = UDim.new(0, 6)
				_attributes_2.PaddingTop = UDim.new(0, 6)
				_children_1[_length_1 + 1] = Roact.createElement("UIPadding", _attributes_2)
				_children_1[_length_1 + 2] = Roact.createElement("UICorner", {
					CornerRadius = UDim.new(1, 0),
				})
				_children_1[_length_1 + 3] = Roact.createElement("UIListLayout", {
					FillDirection = Enum.FillDirection.Horizontal,
					HorizontalAlignment = Enum.HorizontalAlignment.Center,
					VerticalAlignment = Enum.VerticalAlignment.Center,
					SortOrder = Enum.SortOrder.LayoutOrder,
					Padding = UDim.new(0, 8),
				})
				if icon then
					_children_1[_length_1 + 4] = icon
				end
				_length_1 = #_children_1
				local _attributes_3 = {}
				local _result
				if self.props.AutomaticSize then
					_result = UDim2.fromScale(0, 1)
				else
					local _value_2 = self.props.Icon
					_result = if _value_2 ~= "" and _value_2 then UDim2.fromScale(0.8, 1) else UDim2.fromScale(1, 1)
				end
				_attributes_3.Size = _result
				_attributes_3.AutomaticSize = if self.props.AutomaticSize then Enum.AutomaticSize.X else nil
				_attributes_3.BackgroundTransparency = 1
				_attributes_3.FontFace = GothamMedium
				_attributes_3.TextColor3 = if self.props.Disabled then theme.Scheme.onBackground else onColor
				_attributes_3.TextTransparency = if self.props.Disabled then 1 - 0.38 else 0
				_attributes_3.Text = self.props.Text
				_attributes_3.TextSize = 14
				_children_1[_length_1 + 1] = Roact.createElement("TextLabel", _attributes_3)
				_children[_length + 1] = Roact.createElement("Frame", _attributes_1, _children_1)
				_children[_length + 2] = Roact.createElement("UICorner", {
					CornerRadius = UDim.new(1, 0),
				})
				return Roact.createElement("TextButton", _attributes, _children)
			end,
		})
	end
end
return {
	default = TonalButtonBase,
}
