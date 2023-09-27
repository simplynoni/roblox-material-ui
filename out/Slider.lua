-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local Roact = _roact
local createRef = _roact.createRef
local RoundedFrame = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "RoundedFrame").default
local _flipper = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "flipper", "src")
local SingleMotor = _flipper.SingleMotor
local Spring = _flipper.Spring
local UserInputService = game:GetService("UserInputService")
local Slider
do
	Slider = Roact.PureComponent:extend("Slider")
	function Slider:init(props)
		self.railRef = createRef()
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
		return Roact.createElement("Frame", {
			key = "Slider",
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size or UDim2.new(1, 0, 0, 15),
			BackgroundTransparency = 1,
			LayoutOrder = self.props.LayoutOrder,
		}, {
			Roact.createElement("TextButton", {
				key = "Thumb",
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = self.dragBinding:map(function(value)
					return UDim2.fromScale(value, 0.5)
				end),
				Size = UDim2.new(0, 15, 1, 0),
				BorderSizePixel = 0,
				BackgroundColor3 = theme.Scheme.primary,
				AutoButtonColor = false,
				Text = "",
				ZIndex = 2,
				[Roact.Event.InputBegan] = function(_, input)
					if input.UserInputType ~= Enum.UserInputType.MouseButton1 and input.UserInputType ~= Enum.UserInputType.Touch then
						return nil
					end
					local slider = self.railRef.current
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
			Roact.createElement("TextButton", {
				key = "Hitbox",
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(1, 1),
				BackgroundTransparency = 1,
				Text = "",
				[Roact.Event.InputBegan] = function(_, input)
					if input.UserInputType ~= Enum.UserInputType.MouseButton1 and input.UserInputType ~= Enum.UserInputType.Touch then
						return nil
					end
					local slider = self.railRef.current
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
			Roact.createElement(RoundedFrame, {
				key = "Rail",
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.new(1, 0, 0, 3),
				CornerRadius = "Full",
				Color = theme.Scheme.secondaryContainer,
				[Roact.Ref] = self.railRef,
			}, {
				Roact.createElement(RoundedFrame, {
					key = "Filler",
					AnchorPoint = Vector2.new(0, 0.5),
					Position = UDim2.fromScale(0, 0.5),
					Size = self.dragBinding:map(function(value)
						return UDim2.fromScale(value, 1)
					end),
					CornerRadius = "Full",
					Color = theme.Scheme.primary,
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
return {
	default = Slider,
}
