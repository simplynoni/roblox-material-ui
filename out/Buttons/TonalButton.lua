-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_rodux = TS.import(script, TS.getModule(script, "@rbxts", "roact-rodux").src)
local connect = _roact_rodux.connect
local StoreProvider = _roact_rodux.StoreProvider
local GothamMedium = TS.import(script, script.Parent.Parent, "Fonts").GothamMedium
local Icon = TS.import(script, script.Parent.Parent, "Icon").default
local ThemeStore = TS.import(script, script.Parent.Parent, "Theme", "ThemeState").ThemeStore
local ContainerScheme = TS.import(script, script.Parent.Parent, "types").ContainerScheme
local LowerCaseFirstLetter = TS.import(script, script.Parent.Parent, "Utils").LowerCaseFirstLetter
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
		local _value = self.props.Icon
		local icon = if _value ~= "" and _value then (Roact.createElement(Icon, {
			Icon = self.props.Icon,
			IconColor = if self.props.Disabled then theme.Scheme.onBackground else onColor,
			IconTransparency = if self.props.Disabled then 1 - 0.38 else 0,
			IconSize = "24p",
			Size = UDim2.fromScale(0.2, 1),
		})) else nil
		local _attributes = {
			AutoButtonColor = false,
			BackgroundColor3 = if self.props.Disabled then theme.Scheme.onSurface else color,
			BackgroundTransparency = if self.props.Disabled then 1 - 0.12 else 0,
			BorderSizePixel = 0,
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = if self.props.AutomaticSize then UDim2.new(UDim.new(0, 0), UDim.new(0, 35)) else self.props.Size,
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
		_children.StateLayer = Roact.createElement("Frame", _attributes_1, _children_1)
		_children[_length + 1] = Roact.createElement("UICorner", {
			CornerRadius = UDim.new(1, 0),
		})
		return Roact.createElement("TextButton", _attributes, _children)
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
end)(TonalButtonBase)
local TonalButton
do
	TonalButton = Roact.Component:extend("TonalButton")
	function TonalButton:init()
	end
	function TonalButton:render()
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
	default = TonalButton,
}
