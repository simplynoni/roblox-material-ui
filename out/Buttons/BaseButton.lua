-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _flipper = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "flipper", "src")
local Linear = _flipper.Linear
local SingleMotor = _flipper.SingleMotor
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
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
