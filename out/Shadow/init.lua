-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
local Roact = TS.import(script, TS.getModule(script, "@rbxts", "RoactTS"))
local ShadowElevations = TS.import(script, script, "Elevations").default
-- @TODO: Theme
local Shadow
do
	Shadow = Roact.PureComponent:extend("Shadow")
	function Shadow:init()
	end
	function Shadow:render()
		local shadowElevation = ShadowElevations[self.props.Elevation]
		return Roact.createElement("ImageLabel", {
			key = "Shadow",
			Image = shadowElevation.Id,
			ImageColor3 = Color3.new(0, 0, 0),
			BackgroundTransparency = 1,
			AnchorPoint = Vector2.new(0.5, 0.5),
			Position = shadowElevation.Position,
			Size = shadowElevation.Size,
			ImageTransparency = self.props.Transparency,
			ZIndex = self.props.ZIndex,
			ScaleType = Enum.ScaleType.Slice,
			SliceCenter = shadowElevation.SliceCenter,
		})
	end
end
return {
	default = Shadow,
}
