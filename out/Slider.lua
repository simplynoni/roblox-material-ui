-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local RoundedFrame = TS.import(script, script.Parent, "RoundedFrame").default
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local SingleMotor = _flipper.SingleMotor
local Spring = _flipper.Spring
local _roact_rodux = TS.import(script, TS.getModule(script, "@rbxts", "roact-rodux").src)
local connect = _roact_rodux.connect
local StoreProvider = _roact_rodux.StoreProvider
local UserInputService = game:GetService("UserInputService")
local ThemeStore = TS.import(script, script.Parent, "Theme", "ThemeState").ThemeStore
local Slider
do
	Slider = Roact.PureComponent:extend("Slider")
	function Slider:init(props)
		self.railRef = Roact.createRef()
		self:setState({
			Value = self.props.Value,
		})
		self.dragMotor = SingleMotor.new(self.props.Value)
		local dragBinding, setDragBinding = Roact.createBinding(self.dragMotor:getValue())
		self.dragBinding = dragBinding
		self.dragMotor:onStep(setDragBinding)
	end
	function Slider:render()
		local theme = self.props.Theme
		return Roact.createFragment({
			Slider = Roact.createElement("Frame", {
				AnchorPoint = self.props.AnchorPoint,
				Position = self.props.Position,
				Size = self.props.Size or UDim2.new(1, 0, 0, 15),
				BackgroundTransparency = 1,
				LayoutOrder = self.props.LayoutOrder,
			}, {
				Thumb = Roact.createElement("TextButton", {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = self.dragBinding:map(function(value)
						return UDim2.fromScale(value, 0.5)
					end),
					Size = UDim2.new(0, 15, 1, 0),
					BorderSizePixel = 0,
					BackgroundColor3 = theme.Scheme.primary,
					AutoButtonColor = false,
					Text = "",
					[Roact.Event.InputBegan] = function(_, input)
						if input.UserInputType ~= Enum.UserInputType.MouseButton1 and input.UserInputType ~= Enum.UserInputType.Touch then
							return nil
						end
						local slider = self.railRef:getValue()
						if not slider then
							return nil
						end
						local dragging = true
						local stopDrag = input:GetPropertyChangedSignal("UserInputState"):Connect(function()
							if input.UserInputState == Enum.UserInputState.End then
								dragging = false
							end
						end)
						while dragging do
							local mousePos = UserInputService:GetMouseLocation().X
							local pos = slider.AbsolutePosition.X
							local size = slider.AbsoluteSize.X
							local relative = math.clamp((mousePos - pos) / size, 0, 1)
							local _value = self.props.Steps
							if _value ~= 0 and (_value == _value and _value) then
								relative = math.round(relative * self.props.Steps) / self.props.Steps
							end
							self:setValue(relative)
							task.wait()
						end
						stopDrag:Disconnect()
					end,
				}, {
					Roact.createElement("UICorner", {
						CornerRadius = UDim.new(0.5, 0),
					}),
					Roact.createElement("UIAspectRatioConstraint", {
						AspectRatio = 1,
					}),
				}),
				Hitbox = Roact.createElement("TextButton", {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(1, 1),
					BackgroundTransparency = 1,
					Text = "",
					[Roact.Event.InputBegan] = function(_, input)
						if input.UserInputType ~= Enum.UserInputType.MouseButton1 and input.UserInputType ~= Enum.UserInputType.Touch then
							return nil
						end
						local slider = self.railRef:getValue()
						if not slider then
							return nil
						end
						local mousePos = UserInputService:GetMouseLocation().X
						local pos = slider.AbsolutePosition.X
						local size = slider.AbsoluteSize.X
						local relative = math.clamp((mousePos - pos) / size, 0, 1)
						local _value = self.props.Steps
						if _value ~= 0 and (_value == _value and _value) then
							relative = math.round(relative * self.props.Steps) / self.props.Steps
						end
						self:setValue(relative)
					end,
				}),
				Rail = Roact.createElement(RoundedFrame, {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.new(1, 0, 0, 3),
					CornerRadius = "Full",
					Color = theme.Scheme.secondaryContainer,
					[Roact.Ref] = self.railRef,
				}, {
					Filler = Roact.createElement(RoundedFrame, {
						AnchorPoint = Vector2.new(0, 0.5),
						Position = UDim2.fromScale(0, 0.5),
						Size = self.dragBinding:map(function(value)
							return UDim2.fromScale(value, 1)
						end),
						CornerRadius = "Full",
						Color = theme.Scheme.primary,
					}),
				}),
			}),
		})
	end
	function Slider:setValue(value)
		if self.state.Value == value then
			return nil
		end
		if self.props.ChangedEvent then
			task.spawn(self.props.ChangedEvent, value)
		end
		self.dragMotor:setGoal(Spring.new(value, {
			frequency = 2,
			dampingRatio = 0.75,
		}))
		self:setState({
			Value = value,
		})
	end
	function Slider:didUpdate(previousProps)
		if self.props.Value ~= previousProps.Value then
			self:setValue(self.props.Value)
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
end)(Slider)
local ThemedSlider
do
	ThemedSlider = Roact.Component:extend("ThemedSlider")
	function ThemedSlider:init()
	end
	function ThemedSlider:render()
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
	default = ThemedSlider,
}
