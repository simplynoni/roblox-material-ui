-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _flipper = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "flipper", "src")
local Linear = _flipper.Linear
local SingleMotor = _flipper.SingleMotor
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local Icon = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Icon").default
local RoundedFrame = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "RoundedFrame").default
local IconButton
do
	IconButton = Roact.Component:extend("IconButton")
	function IconButton:init(props)
		self.stateMotor = SingleMotor.new(0)
		local stateBinding, setStateBinding = Roact.createBinding(self.stateMotor:getValue())
		self.stateBinding = stateBinding
		self.stateMotor:onStep(setStateBinding)
		self:setState({
			Debounce = false,
		})
	end
	function IconButton:render()
		local theme = self.props.Theme
		return Roact.createElement("TextButton", {
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size,
			ZIndex = self.props.ZIndex,
			LayoutOrder = self.props.LayoutOrder,
			AutoButtonColor = false,
			BackgroundTransparency = 1,
			Text = "",
			[Roact.Event.MouseButton1Click] = TS.async(function()
				if self.state.Debounce == false then
					self:setState({
						Debounce = true,
					})
					self.props.Pressed()
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
		}, {
			Roact.createElement("UIAspectRatioConstraint", {
				AspectRatio = 1,
				AspectType = Enum.AspectType.ScaleWithParentSize,
				DominantAxis = Enum.DominantAxis.Height,
			}),
			Roact.createElement("UICorner", {
				CornerRadius = UDim.new(1),
			}),
			Roact.createElement(Icon, {
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(0.75, 0.75),
				Icon = self.props.Icon,
				IconSize = "24p",
				IconColor = self.props.IconColor or theme.Scheme.onBackground,
			}),
			Roact.createElement(RoundedFrame, {
				key = "StateLayer",
				CornerRadius = "Full",
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(1, 1),
				Color = theme.Scheme.onBackground,
				Transparency = self.stateBinding:map(function(opacity)
					return 1 - opacity
				end),
			}),
		})
	end
end
return {
	default = IconButton,
}
