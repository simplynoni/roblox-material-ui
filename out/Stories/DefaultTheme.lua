-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Scheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "material-color").default
local Theme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "types").Theme
local DefaultColor = Color3.fromRGB(255, 89, 0)
local DefaultTheme = {
	Color = DefaultColor,
	Theme = Theme.Dark,
	Scheme = Scheme:dark(DefaultColor).Colors,
}
local default = DefaultTheme
return {
	default = default,
}
