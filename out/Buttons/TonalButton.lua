-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local GothamMedium = TS.import(script, script.Parent.Parent, "Fonts").GothamMedium
local Icon = TS.import(script, script.Parent.Parent, "Icon").default
local LowerCaseFirstLetter = TS.import(script, script.Parent.Parent, "Utils").LowerCaseFirstLetter
local ContainerScheme = TS.import(script, script.Parent.Parent, "types").ContainerScheme
local BaseButton = TS.import(script, script.Parent, "BaseButton").default
local TonalButtonBase
do
	local super = BaseButton
	TonalButtonBase = setmetatable({}, {
		__tostring = function()
			return "TonalButtonBase"
		end,
		__index = super,
	})
	TonalButtonBase.__index = TonalButtonBase
	function TonalButtonBase.new(...)
		local self = setmetatable({}, TonalButtonBase)
		return self:constructor(...) or self
	end
	function TonalButtonBase:constructor(...)
		super.constructor(self, ...)
	end
	function TonalButtonBase:render()
		local theme = self.props.Theme
		local colorScheme = self.props.ColorScheme or ContainerScheme.SecondaryContainer
		local lowerCaseColorScheme = LowerCaseFirstLetter(colorScheme)
		local color = if self.props.CustomColorGroup then self.props.CustomColorGroup.colorContainer else theme.Scheme[lowerCaseColorScheme]
		local onColor = if self.props.CustomColorGroup then self.props.CustomColorGroup.onColorContainer else theme.Scheme["on" .. colorScheme]
		local icon = if self.props.Icon then (Roact.createElement(Icon, {
			Icon = self.props.Icon,
			IconColor = if self.props.Disabled then theme.Scheme.onBackground else onColor,
			IconTransparency = if self.props.Disabled then 1 - 0.38 else 0,
			Size = UDim2.fromScale(0.2, 1),
		})) else nil
		local _attributes = {
			AutoButtonColor = false,
			BackgroundColor3 = if self.props.Disabled then theme.Scheme.onSurface else color,
			BackgroundTransparency = if self.props.Disabled then 1 - 0.12 else 0,
			BorderSizePixel = 0,
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size,
			Text = "",
			AutomaticSize = if self.props.AutomaticSize then Enum.AutomaticSize.X else nil,
			[Roact.Event.MouseButton1Click] = TS.async(function()
				return self:MouseClick()
			end),
			[Roact.Event.MouseButton1Up] = function()
				return self:MouseUp()
			end,
			[Roact.Event.MouseEnter] = function()
				return self:MouseEnter()
			end,
			[Roact.Event.MouseButton1Down] = function()
				return self:MouseDown()
			end,
			[Roact.Event.MouseLeave] = function()
				return self:MouseLeave()
			end,
		}
		local _children = {}
		local _length = #_children
		local _attributes_1 = {
			Size = UDim2.fromScale(if self.props.AutomaticSize then 0 else 1, 1),
			AutomaticSize = if self.props.AutomaticSize then Enum.AutomaticSize.X else nil,
			BackgroundColor3 = onColor,
			BackgroundTransparency = self.stateBinding:map(function(opacity)
				return 1 - opacity
			end),
		}
		local _children_1 = {
			Roact.createElement("UIPadding", {
				PaddingLeft = UDim.new(0, if self.props.Icon then 16 else 24),
				PaddingRight = UDim.new(0, 24),
				PaddingBottom = UDim.new(0, 6),
				PaddingTop = UDim.new(0, 6),
			}),
			Roact.createElement("UICorner", {
				CornerRadius = UDim.new(1, 0),
			}),
			Roact.createElement("UIListLayout", {
				FillDirection = Enum.FillDirection.Horizontal,
				HorizontalAlignment = Enum.HorizontalAlignment.Center,
				VerticalAlignment = Enum.VerticalAlignment.Center,
				SortOrder = Enum.SortOrder.LayoutOrder,
				Padding = UDim.new(0, 8),
			}),
		}
		local _length_1 = #_children_1
		if icon then
			_children_1[_length_1 + 1] = icon
		end
		_length_1 = #_children_1
		_children_1[_length_1 + 1] = Roact.createElement("TextLabel", {
			Size = if self.props.AutomaticSize then UDim2.fromScale(0, 1) elseif self.props.Icon then UDim2.fromScale(0.8, 1) else UDim2.fromScale(1, 1),
			AutomaticSize = if self.props.AutomaticSize then Enum.AutomaticSize.X else nil,
			BackgroundTransparency = 1,
			FontFace = GothamMedium,
			TextColor3 = if self.props.Disabled then theme.Scheme.onBackground else onColor,
			TextTransparency = if self.props.Disabled then 1 - 0.38 else 0,
			Text = self.props.Text,
			TextSize = 14,
		})
		_children.StateLayer = Roact.createElement("Frame", _attributes_1, _children_1)
		_children[_length + 1] = Roact.createElement("UICorner", {
			CornerRadius = UDim.new(1, 0),
		})
		return Roact.createElement("TextButton", _attributes, _children)
	end
end
return {
	default = TonalButtonBase,
}
