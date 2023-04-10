-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "roact").src)
local Icon
do
	Icon = Roact.Component:extend("Icon")
	function Icon:init()
	end
	function Icon:render()
		local maxSize
		local corner
		if self.props.IconSize == "24p" and self.props.MaxSize then
			maxSize = Roact.createElement("UISizeConstraint", {
				MaxSize = Vector2.new(24, 24),
			})
		end
		if self.props.Circle then
			corner = Roact.createElement("UICorner", {
				CornerRadius = UDim.new(1),
			})
		end
		local _attributes = {
			AnchorPoint = self.props.AnchorPoint,
			Position = self.props.Position,
			Size = self.props.Size,
			Image = self.props.Icon,
			ImageColor3 = self.props.IconColor,
			ImageTransparency = self.props.IconTransparency,
			BackgroundTransparency = 1,
			LayoutOrder = self.props.LayoutOrder,
		}
		local _children = {
			Roact.createElement("UIAspectRatioConstraint", {
				AspectRatio = 1,
			}),
		}
		local _length = #_children
		if maxSize then
			_children[_length + 1] = maxSize
		end
		_length = #_children
		if corner then
			_children[_length + 1] = corner
		end
		return Roact.createFragment({
			Icon = Roact.createElement("ImageLabel", _attributes, _children),
		})
	end
end
return {
	default = Icon,
}
