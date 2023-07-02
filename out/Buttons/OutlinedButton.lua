-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local GothamMedium = TS.import(script, script.Parent.Parent, "Fonts").GothamMedium
local Icon = TS.import(script, script.Parent.Parent, "Icon").default
local ColorScheme = TS.import(script, script.Parent.Parent, "types").ColorScheme
local BaseButton = TS.import(script, script.Parent, "BaseButton").default
local OutlinedButtonBase
do
	local super = BaseButton
	OutlinedButtonBase = setmetatable({}, {
		__tostring = function()
			return "OutlinedButtonBase"
		end,
		__index = super,
	})
	OutlinedButtonBase.__index = OutlinedButtonBase
	function OutlinedButtonBase.new(...)
		local self = setmetatable({}, OutlinedButtonBase)
		return self:constructor(...) or self
	end
	function OutlinedButtonBase:constructor(...)
		super.constructor(self, ...)
	end
	function OutlinedButtonBase:render()
		local theme = self.props.Theme
		local colorScheme = self.props.ColorScheme or ColorScheme.Primary
		local lowerCaseColorScheme = string.lower(colorScheme)
		local color = if self.props.CustomColorGroup then self.props.CustomColorGroup.color else theme.Scheme[lowerCaseColorScheme]
		local icon = if self.props.Icon then (Roact.createElement(Icon, {
			Icon = self.props.Icon,
			IconColor = if self.props.Disabled then theme.Scheme.onBackground else color,
			IconTransparency = if self.props.Disabled then 1 - 0.38 else 0,
			Size = UDim2.fromScale(0.2, 1),
		})) else nil
		local _attributes = {
			AutoButtonColor = false,
			BackgroundTransparency = self.stateBinding:map(function(opacity)
				return 1 - opacity
			end),
			BackgroundColor3 = color,
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size,
			Text = "",
			AutomaticSize = if self.props.AutomaticSize then "X" else nil,
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
		local _children = {
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
		local _length = #_children
		if icon then
			_children[_length + 1] = icon
		end
		_length = #_children
		_children[_length + 1] = Roact.createElement("TextLabel", {
			Size = if self.props.AutomaticSize then UDim2.fromScale(0, 1) elseif self.props.Icon then UDim2.fromScale(0.8, 1) else UDim2.fromScale(1, 1),
			AutomaticSize = if self.props.AutomaticSize then Enum.AutomaticSize.X else nil,
			BackgroundTransparency = 1,
			FontFace = GothamMedium,
			TextColor3 = if self.props.Disabled then theme.Scheme.onBackground else color,
			TextTransparency = if self.props.Disabled then 1 - 0.38 else 0,
			Text = self.props.Text,
			TextSize = 14,
		})
		_children[_length + 2] = Roact.createElement("UIStroke", {
			ApplyStrokeMode = Enum.ApplyStrokeMode.Border,
			Color = theme.Scheme.outline,
			Transparency = if self.props.Disabled then 1 - 0.12 else 0,
		})
		return Roact.createElement("TextButton", _attributes, _children)
	end
end
return {
	default = OutlinedButtonBase,
}
