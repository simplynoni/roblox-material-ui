-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local GroupMotor = _flipper.GroupMotor
local Linear = _flipper.Linear
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local RoundedFrame = TS.import(script, script.Parent, "RoundedFrame").default
local Switch
do
	Switch = Roact.PureComponent:extend("Switch")
	function Switch:init(props)
		self.positionMotor = GroupMotor.new({
			Position = if self.props.Enabled then 1 else 0,
			AnchorPoint = if self.props.Enabled then 1 else 0,
		})
		local positionBinding, setPositionBinding = Roact.createBinding(self.positionMotor:getValue())
		self.positionBinding = positionBinding
		self.positionMotor:onStep(setPositionBinding)
		self:setState({
			Enabled = self.props.Enabled,
			Debounce = false,
		})
	end
	function Switch:render()
		local theme = self.props.Theme
		local _attributes = {
			key = "Track",
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = UDim2.fromOffset(50, 28),
			BackgroundColor3 = if self.state.Enabled then theme.Scheme.primary else theme.Scheme.surfaceVariant,
			AutoButtonColor = false,
			Text = "",
			BorderSizePixel = 0,
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
		}
		local _children = {}
		local _length = #_children
		local _child = if not self.state.Enabled then (Roact.createElement("UIStroke", {
			ApplyStrokeMode = Enum.ApplyStrokeMode.Border,
			Color = theme.Scheme.outline,
			Thickness = 2,
		})) else nil
		if _child then
			_children[_length + 1] = _child
		end
		_length = #_children
		_children[_length + 1] = Roact.createElement("UICorner", {
			key = "Corner",
			CornerRadius = UDim.new(1, 0),
		})
		_children[_length + 2] = Roact.createElement("UIPadding", {
			key = "Padding",
			PaddingBottom = UDim.new(0, 4),
			PaddingLeft = UDim.new(0, 5),
			PaddingRight = UDim.new(0, 4),
			PaddingTop = UDim.new(0, 4),
		})
		_children[_length + 3] = Roact.createElement(RoundedFrame, {
			key = "Thumb",
			AnchorPoint = self.positionBinding:map(function(_param)
				local AnchorPoint = _param.AnchorPoint
				return Vector2.new(AnchorPoint, 0.5)
			end),
			Position = self.positionBinding:map(function(_param)
				local Position = _param.Position
				return UDim2.fromScale(Position, 0.5)
			end),
			Size = if self.state.Enabled then UDim2.fromOffset(24, 24) else UDim2.fromOffset(16, 16),
			CornerRadius = "Full",
			Color = if self.state.Enabled then theme.Scheme.onPrimary else theme.Scheme.outline,
		}, {
			Roact.createElement("UIAspectRatioConstraint", {
				key = "AspectRatio",
				AspectRatio = 1,
				AspectType = Enum.AspectType.ScaleWithParentSize,
				DominantAxis = Enum.DominantAxis.Height,
			}),
		})
		return Roact.createElement("TextButton", _attributes, _children)
	end
	function Switch:setEnabled(enabled)
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
			self.positionMotor:setGoal({
				Position = Linear.new(if enabled then 1 else 0, {
					velocity = 10,
				}),
				AnchorPoint = Linear.new(if enabled then 1 else 0, {
					velocity = 10,
				}),
			})
		end
	end
	function Switch:didUpdate(previousProps)
		if self.props.Enabled ~= previousProps.Enabled then
			self:setEnabled(self.props.Enabled)
		end
	end
end
return {
	default = Switch,
}
