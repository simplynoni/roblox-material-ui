-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local SingleMotor = _flipper.SingleMotor
local Spring = _flipper.Spring
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local _roact_rodux = TS.import(script, TS.getModule(script, "@rbxts", "roact-rodux").src)
local StoreProvider = _roact_rodux.StoreProvider
local connect = _roact_rodux.connect
local GothamBold = TS.import(script, script.Parent, "Fonts").GothamBold
local RoundedFrame = TS.import(script, script.Parent, "RoundedFrame").default
local ThemeStore = TS.import(script, script.Parent, "Theme", "ThemeState").ThemeStore
local ColorScheme = TS.import(script, script.Parent, "types").ColorScheme
local ProgressBar
do
	ProgressBar = Roact.Component:extend("ProgressBar")
	function ProgressBar:init(props)
		self.state = {
			Value = self.props.Value,
			HolderWidth = 0,
		}
		self.holderRef = Roact.createRef()
		self.valueMotor = SingleMotor.new(self.props.Value / 100)
		local valueBinding, setValueBinding = Roact.createBinding(self.valueMotor:getValue())
		self.valueBinding = valueBinding
		self.valueMotor:onStep(setValueBinding)
	end
	function ProgressBar:render()
		local theme = self.props.Theme
		local colorScheme = self.props.ColorScheme or ColorScheme.Primary
		local lowerCaseColorScheme = string.lower(colorScheme)
		local _value = self.props.Label
		local _attributes = {
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size or UDim2.new(1, 0, 0, 20),
			Color = theme.Scheme[lowerCaseColorScheme .. "Container"],
			BorderSizePixel = 0,
			CornerRadius = "Full",
			[Roact.Ref] = self.holderRef,
		}
		local _children = {}
		local _length = #_children
		local _child = if _value ~= "" and _value then (Roact.createFragment({
			Label = Roact.createElement("TextLabel", {
				AnchorPoint = Vector2.new(0, 0.5),
				Position = UDim2.fromScale(0, 0.5),
				Size = UDim2.fromScale(0.75, 1),
				BackgroundTransparency = 1,
				FontFace = GothamBold,
				Text = self.props.Label,
				TextColor3 = theme.Scheme["on" .. (colorScheme .. "Container")],
				TextXAlignment = Enum.TextXAlignment.Left,
				TextScaled = true,
			}, {
				Roact.createElement("UIPadding", {
					PaddingBottom = UDim.new(0, 1),
					PaddingTop = UDim.new(0, 1),
					PaddingLeft = UDim.new(0, 8),
				}),
			}),
		})) else nil
		if _child then
			_children[_length + 1] = _child
		end
		_length = #_children
		local _child_1 = if self.props.ShowValue then (Roact.createFragment({
			Value = Roact.createElement("TextLabel", {
				AnchorPoint = Vector2.new(1, 0.5),
				Position = UDim2.fromScale(1, 0.5),
				Size = UDim2.fromScale(0.25, 1),
				BackgroundTransparency = 1,
				FontFace = GothamBold,
				Text = tostring(self.state.Value),
				TextColor3 = theme.Scheme["on" .. (colorScheme .. "Container")],
				TextXAlignment = Enum.TextXAlignment.Right,
				TextScaled = true,
			}, {
				Roact.createElement("UIPadding", {
					PaddingBottom = UDim.new(0, 1),
					PaddingTop = UDim.new(0, 1),
					PaddingRight = UDim.new(0, 8),
				}),
			}),
		})) else nil
		if _child_1 then
			_children[_length + 1] = _child_1
		end
		_length = #_children
		local _value_1 = self.props.Label
		local _attributes_1 = {
			AnchorPoint = Vector2.new(0, 0.5),
			Position = UDim2.fromScale(0, 0.5),
			Size = self.valueBinding:map(function(value)
				return UDim2.fromScale(math.clamp(value, 0, 1), 1)
			end),
			BackgroundColor3 = theme.Scheme[lowerCaseColorScheme],
			BorderSizePixel = 0,
		}
		local _children_1 = {
			Roact.createElement("UICorner", {
				CornerRadius = UDim.new(0.5, 0),
			}),
		}
		local _length_1 = #_children_1
		local _child_2 = if _value_1 ~= "" and _value_1 then (Roact.createFragment({
			Label = Roact.createElement("TextLabel", {
				AnchorPoint = Vector2.new(0, 0.5),
				Position = UDim2.fromScale(0, 0.5),
				Size = UDim2.new(0, self.state.HolderWidth * 0.75, 1, 0),
				BackgroundTransparency = 1,
				FontFace = GothamBold,
				Text = self.props.Label,
				TextColor3 = theme.Scheme["on" .. colorScheme],
				TextXAlignment = Enum.TextXAlignment.Left,
				TextScaled = true,
			}, {
				Roact.createElement("UIPadding", {
					PaddingBottom = UDim.new(0, 1),
					PaddingTop = UDim.new(0, 1),
					PaddingLeft = UDim.new(0, 8),
				}),
			}),
		})) else nil
		if _child_2 then
			_children_1[_length_1 + 1] = _child_2
		end
		_length_1 = #_children_1
		local _child_3 = if self.props.ShowValue then (Roact.createFragment({
			Value = Roact.createElement("TextLabel", {
				AnchorPoint = Vector2.new(1, 0.5),
				Position = UDim2.new(0, self.state.HolderWidth, 0.5, 0),
				Size = UDim2.fromScale(0.25, 1),
				BackgroundTransparency = 1,
				FontFace = GothamBold,
				Text = tostring(self.state.Value),
				TextColor3 = theme.Scheme["on" .. colorScheme],
				TextXAlignment = Enum.TextXAlignment.Right,
				TextScaled = true,
			}, {
				Roact.createElement("UIPadding", {
					PaddingBottom = UDim.new(0, 1),
					PaddingTop = UDim.new(0, 1),
					PaddingRight = UDim.new(0, 8),
				}),
			}),
		})) else nil
		if _child_3 then
			_children_1[_length_1 + 1] = _child_3
		end
		_children.Filler = Roact.createElement("CanvasGroup", _attributes_1, _children_1)
		return Roact.createFragment({
			ProgressBar = Roact.createElement(RoundedFrame, _attributes, _children),
		})
	end
	function ProgressBar:setValue(value)
		self.valueMotor:setGoal(Spring.new(value / 100, {
			frequency = 1,
			dampingRatio = 0.75,
		}))
		self:setState({
			Value = value,
		})
	end
	function ProgressBar:didMount()
		-- very hacky "fix"
		-- might not work on low end devices
		coroutine.wrap(function()
			task.wait(0.01)
			local holder = self.holderRef:getValue()
			if holder then
				self:setState({
					HolderWidth = holder.AbsoluteSize.X,
				})
			end
		end)()
	end
	function ProgressBar:didUpdate(previousProps, previousState)
		if self.props.Value ~= self.state.Value then
			self:setValue(self.props.Value)
		end
		local holder = self.holderRef:getValue()
		if holder and holder.AbsoluteSize.X ~= self.state.HolderWidth then
			self:setState({
				HolderWidth = holder.AbsoluteSize.X,
			})
		end
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
end)(ProgressBar)
local ThemedProgressBar
do
	ThemedProgressBar = Roact.Component:extend("ThemedProgressBar")
	function ThemedProgressBar:init()
	end
	function ThemedProgressBar:render()
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
	default = ThemedProgressBar,
}
