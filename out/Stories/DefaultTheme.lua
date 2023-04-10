-- Compiled with roblox-ts v2.1.0
local TS = _G[script]
local Scheme = TS.import(script, script.Parent.Parent, "material-color").default
local Theme = TS.import(script, script.Parent.Parent, "types").Theme
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
