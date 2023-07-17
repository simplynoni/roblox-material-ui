-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local Linear = _flipper.Linear
local SingleMotor = _flipper.SingleMotor
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local BaseButton
do
	BaseButton = Roact.Component:extend("BaseButton")
	function BaseButton:init(props)
		self.state = {
			Debounce = false,
		}
		self.stateMotor = SingleMotor.new(0)
		local stateBinding, setStateBinding = Roact.createBinding(self.stateMotor:getValue())
		self.stateBinding = stateBinding
		self.stateMotor:onStep(setStateBinding)
	end
	function BaseButton:render()
		return nil
	end
	function BaseButton:didUpdate(previousProps, previousState)
		if previousProps.Disabled ~= self.props.Disabled and self.props.Disabled then
			self.stateMotor:setGoal(Linear.new(0, {
				velocity = 0.5,
			}))
		end
	end
	BaseButton.MouseClick = TS.async(function(self)
		if self.props.Disabled then
			return nil
		end
		if self.state.Debounce == false then
			self:setState({
				Debounce = true,
			})
			task.spawn(self.props.Pressed)
			TS.await(TS.Promise.delay(0.25))
			self:setState({
				Debounce = false,
			})
		end
	end)
	function BaseButton:MouseUp()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0.08, {
			velocity = 0.5,
		}))
	end
	function BaseButton:MouseDown()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0.12, {
			velocity = 0.5,
		}))
	end
	function BaseButton:MouseEnter()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0.08, {
			velocity = 0.5,
		}))
	end
	function BaseButton:MouseLeave()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0, {
			velocity = 0.5,
		}))
	end
end
return {
	default = BaseButton,
}
