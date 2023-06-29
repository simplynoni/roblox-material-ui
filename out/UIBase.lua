-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local GroupMotor = _flipper.GroupMotor
local Linear = _flipper.Linear
local SingleMotor = _flipper.SingleMotor
local Maid = TS.import(script, TS.getModule(script, "@rbxts", "maid").Maid)
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Shadow = TS.import(script, script.Parent, "Shadow").default
local defaults = {
	positionVelocity = 1,
	fadeVelocity = 7,
}
local UIBase
do
	UIBase = Roact.Component:extend("UIBase")
	function UIBase:init(props)
		self.positionMotor = GroupMotor.new(if self.props.Closed then {
			X = if self.props.CustomClosePosition then self.props.CustomClosePosition.X elseif self.props.Position.X.Scale >= 0.5 then self.props.Position.X.Scale + 0.2 else self.props.Position.X.Scale - 0.2,
			Y = props.Position.Y.Scale,
		} else {
			X = props.Position.X.Scale,
			Y = props.Position.Y.Scale,
		})
		local positionBinding, setPositionBinding = Roact.createBinding(self.positionMotor:getValue())
		self.positionBinding = positionBinding
		self.positionMotor:onStep(setPositionBinding)
		self.fadeMotor = SingleMotor.new(1)
		local fadeBinding, setFadeBinding = Roact.createBinding(self.fadeMotor:getValue())
		self.fadeBinding = fadeBinding
		self.fadeMotor:onStep(setFadeBinding)
		local _fn = self
		local _object = {}
		local _left = "Closed"
		local _condition = self.props.Closed
		if _condition == nil then
			_condition = false
		end
		_object[_left] = _condition
		local _left_1 = "Visible"
		local _condition_1 = not self.props.Closed
		if _condition_1 == nil then
			_condition_1 = true
		end
		_object[_left_1] = _condition_1
		_fn:setState(_object)
	end
	function UIBase:render()
		local theme = self.props.Theme
		local _value = self.props.AspectRatio
		local aspectRatio = if _value ~= 0 and (_value == _value and _value) then (Roact.createFragment({
			AspectRatio = Roact.createElement("UIAspectRatioConstraint", {
				AspectRatio = self.props.AspectRatio,
				AspectType = self.props.AspectType or Enum.AspectType.ScaleWithParentSize,
				DominantAxis = self.props.DominantAxis or Enum.DominantAxis.Width,
			}),
		})) else nil
		local sizeConstraint = if self.props.MaxSize or self.props.MinSize then (Roact.createFragment({
			SizeConstraint = Roact.createElement("UISizeConstraint", {
				MaxSize = self.props.MaxSize,
				MinSize = self.props.MinSize,
			}),
		})) else nil
		local _attributes = {
			AnchorPoint = self.props.AnchorPoint,
			Position = self.positionBinding:map(function(_param)
				local X = _param.X
				local Y = _param.Y
				return UDim2.new(X, self.props.Position.X.Offset, Y, self.props.Position.Y.Offset)
			end),
			Size = self.props.Size,
			BackgroundTransparency = 1,
			Visible = self.state.Visible,
		}
		local _children = {
			Roact.createElement(Shadow, {
				Elevation = 5,
				Transparency = self.fadeBinding:map(function(opacity)
					return 1 - opacity
				end),
			}),
		}
		local _length = #_children
		local _attributes_1 = {
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = UDim2.fromScale(0.5, 0.5),
			Size = UDim2.fromScale(1, 1),
			BackgroundColor3 = theme.Scheme.background,
			GroupTransparency = self.fadeBinding:map(function(opacity)
				return 1 - opacity
			end),
		}
		local _children_1 = {
			Roact.createElement("UICorner", {
				CornerRadius = UDim.new(0, 16),
			}),
		}
		local _length_1 = #_children_1
		local _child = self.props[Roact.Children]
		if _child then
			for _k, _v in _child do
				if type(_k) == "number" then
					_children_1[_length_1 + _k] = _v
				else
					_children_1[_k] = _v
				end
			end
		end
		_children.InnerContainer = Roact.createElement("CanvasGroup", _attributes_1, _children_1)
		if aspectRatio then
			_children[_length + 1] = aspectRatio
		end
		_length = #_children
		if sizeConstraint then
			_children[_length + 1] = sizeConstraint
		end
		return Roact.createFragment({
			OuterContainer = Roact.createElement("Frame", _attributes, _children),
		})
	end
	function UIBase:setClosed(closed)
		if self.state.Closed == closed then
			return nil
		end
		local maid = Maid.new()
		if closed == false then
			self:setState({
				Closed = closed,
				Visible = not closed,
			})
			local _fn = self.positionMotor
			local _object = {}
			local _left = "X"
			local _exp = self.props.Position.X.Scale
			local _object_1 = {}
			local _left_1 = "velocity"
			local _condition = self.props.PositionVelocity
			if not (_condition ~= 0 and (_condition == _condition and _condition)) then
				_condition = defaults.positionVelocity
			end
			_object_1[_left_1] = _condition
			_object[_left] = Linear.new(_exp, _object_1)
			local _left_2 = "Y"
			local _exp_1 = self.props.Position.Y.Scale
			local _object_2 = {}
			local _left_3 = "velocity"
			local _condition_1 = self.props.PositionVelocity
			if not (_condition_1 ~= 0 and (_condition_1 == _condition_1 and _condition_1)) then
				_condition_1 = defaults.positionVelocity
			end
			_object_2[_left_3] = _condition_1
			_object[_left_2] = Linear.new(_exp_1, _object_2)
			_fn:setGoal(_object)
			local _fn_1 = self.fadeMotor
			local _object_3 = {}
			local _left_4 = "velocity"
			local _condition_2 = self.props.FadeVelocity
			if not (_condition_2 ~= 0 and (_condition_2 == _condition_2 and _condition_2)) then
				_condition_2 = defaults.fadeVelocity
			end
			_object_3[_left_4] = _condition_2
			_fn_1:setGoal(Linear.new(1, _object_3))
		else
			self:setState({
				Closed = closed,
			})
			local _fn = self.positionMotor
			local _object = {}
			local _left = "X"
			local _exp = if self.props.CustomClosePosition then self.props.CustomClosePosition.X elseif self.props.Position.X.Scale >= 0.5 then self.props.Position.X.Scale + 0.2 else self.props.Position.X.Scale - 0.2
			local _object_1 = {}
			local _left_1 = "velocity"
			local _condition = self.props.PositionVelocity
			if not (_condition ~= 0 and (_condition == _condition and _condition)) then
				_condition = defaults.positionVelocity
			end
			_object_1[_left_1] = _condition
			_object[_left] = Linear.new(_exp, _object_1)
			local _left_2 = "Y"
			local _exp_1 = if self.props.CustomClosePosition then self.props.CustomClosePosition.Y else self.props.Position.Y.Scale
			local _object_2 = {}
			local _left_3 = "velocity"
			local _condition_1 = self.props.PositionVelocity
			if not (_condition_1 ~= 0 and (_condition_1 == _condition_1 and _condition_1)) then
				_condition_1 = defaults.positionVelocity
			end
			_object_2[_left_3] = _condition_1
			_object[_left_2] = Linear.new(_exp_1, _object_2)
			_fn:setGoal(_object)
			local _fn_1 = self.fadeMotor
			local _object_3 = {}
			local _left_4 = "velocity"
			local _condition_2 = self.props.FadeVelocity
			if not (_condition_2 ~= 0 and (_condition_2 == _condition_2 and _condition_2)) then
				_condition_2 = defaults.fadeVelocity
			end
			_object_3[_left_4] = _condition_2
			_fn_1:setGoal(Linear.new(0, _object_3))
			local onComplete = self.positionMotor:onComplete(function()
				if self.state.Closed then
					self:setState({
						Visible = false,
					})
				end
				maid:DoCleaning()
			end)
			maid:GiveTask(function()
				return onComplete:disconnect()
			end)
		end
	end
	function UIBase:didUpdate(previousProps)
		if self.props.Closed ~= nil and previousProps.Closed ~= self.props.Closed then
			self:setClosed(self.props.Closed)
		end
	end
end
return {
	default = UIBase,
}
