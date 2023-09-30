-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local _flipper = TS.import(script, TS.getModule(script, "@rbxts", "flipper").src)
local Linear = _flipper.Linear
local SingleMotor = _flipper.SingleMotor
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local ButtonBase
do
	ButtonBase = Roact.Component:extend("ButtonBase")
	function ButtonBase:init(props)
		self:setState({
			Debounce = false,
		})
		self.stateMotor = SingleMotor.new(0)
		local stateBinding, setStateBinding = Roact.createBinding(self.stateMotor:getValue())
		self.stateBinding = stateBinding
		self.stateMotor:onStep(setStateBinding)
	end
	function ButtonBase:render()
		return self.props.Render({
			StateMotor = self.stateMotor,
			StateBinding = self.stateBinding,
			MouseClick = function()
				return self:MouseClick()
			end,
			MouseUp = function()
				return self:MouseUp()
			end,
			MouseDown = function()
				return self:MouseDown()
			end,
			MouseEnter = function()
				return self:MouseEnter()
			end,
			MouseLeave = function()
				return self:MouseLeave()
			end,
		})
	end
	ButtonBase.MouseClick = TS.async(function(self)
		if self.props.Disabled then
			return nil
		end
		if self.state.Debounce == false then
			self:setState({
				Debounce = true,
			})
			task.spawn(self.props.Pressed)
			task.wait(0.25)
			self:setState({
				Debounce = false,
			})
		end
	end)
	function ButtonBase:MouseUp()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0.08, {
			velocity = 0.5,
		}))
	end
	function ButtonBase:MouseDown()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0.12, {
			velocity = 0.5,
		}))
	end
	function ButtonBase:MouseEnter()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0.08, {
			velocity = 0.5,
		}))
	end
	function ButtonBase:MouseLeave()
		if self.props.Disabled then
			return nil
		end
		self.stateMotor:setGoal(Linear.new(0, {
			velocity = 0.5,
		}))
	end
end
return {
	default = ButtonBase,
}
