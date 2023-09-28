-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local default = Roact.forwardRef(function(props, ref)
	local _attributes = {
		Size = props.Size,
		Position = props.Position,
		AnchorPoint = props.AnchorPoint,
		BackgroundColor3 = props.Color,
		BackgroundTransparency = props.Transparency,
		ZIndex = props.ZIndex,
		BorderSizePixel = 0,
		LayoutOrder = props.LayoutOrder,
		[Roact.Ref] = ref,
	}
	local _children = {
		Roact.createElement("UICorner", {
			key = "Corner",
			CornerRadius = if props.CornerRadius == "Full" then UDim.new(0.5, 0) else UDim.new(0, props.CornerRadius),
		}),
		if props.Outline then Roact.createElement("UIStroke", {
			ApplyStrokeMode = Enum.ApplyStrokeMode.Border,
			Color = props.OutlineColor,
		}) else Roact.createFragment(),
	}
	local _length = #_children
	local _child = props[Roact.Children]
	if _child then
		for _k, _v in _child do
			if type(_k) == "number" then
				_children[_length + _k] = _v
			else
				_children[_k] = _v
			end
		end
	end
	return Roact.createElement("Frame", _attributes, _children)
end)
return {
	default = default,
}
