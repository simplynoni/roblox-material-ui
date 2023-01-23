-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_rodux = TS.import(script, TS.getModule(script, "@rbxts", "roact-rodux").src)
local connect = _roact_rodux.connect
local StoreProvider = _roact_rodux.StoreProvider
local GothamMedium = TS.import(script, script.Parent, "Fonts").GothamMedium
local ThemeStore = TS.import(script, script.Parent, "Theme", "ThemeState").ThemeStore
local SectionTitleBase
do
	SectionTitleBase = Roact.PureComponent:extend("SectionTitleBase")
	function SectionTitleBase:init()
	end
	function SectionTitleBase:render()
		local theme = self.props.Theme
		local _attributes = {
			Size = self.props.Size or UDim2.new(1, 0, 0, 28),
			BackgroundTransparency = 1,
			Text = self.props.Text,
			FontFace = GothamMedium,
			TextColor3 = theme.Scheme.primary,
			TextXAlignment = Enum.TextXAlignment.Left,
			TextYAlignment = Enum.TextYAlignment.Bottom,
			TextSize = self.props.TextSize,
		}
		local _value = self.props.TextSize
		_attributes.TextScaled = not (_value ~= 0 and (_value == _value and _value))
		local _value_1 = self.props.MaxTextSize
		local _children = {
			Roact.createElement("UIPadding", {
				PaddingLeft = UDim.new(0, 16),
				PaddingRight = UDim.new(0, 16),
			}),
		}
		local _length = #_children
		local _child = if _value_1 ~= 0 and (_value_1 == _value_1 and _value_1) then Roact.createElement("UITextSizeConstraint", {
			MaxTextSize = self.props.MaxTextSize,
		}) else nil
		if _child then
			_children[_length + 1] = _child
		end
		return Roact.createElement("TextLabel", _attributes, _children)
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
end)(SectionTitleBase)
local SectionTitle
do
	SectionTitle = Roact.Component:extend("SectionTitle")
	function SectionTitle:init()
	end
	function SectionTitle:render()
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
	default = SectionTitle,
}
