-- Compiled with roblox-ts v2.0.4
local TS = _G[script]
local Rodux = TS.import(script, TS.getModule(script, "@rbxts", "rodux").src)
local _Constants = TS.import(script, script.Parent.Parent, "Constants")
local DefaultThemeColor = _Constants.DefaultThemeColor
local Theme = _Constants.Theme
local Scheme = TS.import(script, script.Parent.Parent, "material-color").default
local function SetTheme(theme)
	return {
		type = "SetTheme",
		Theme = theme,
	}
end
local function SetColor(color)
	return {
		type = "SetColor",
		Color = color,
	}
end
local ThemeReducer = Rodux.createReducer({
	Theme = Theme.Dark,
	Color = DefaultThemeColor.Color,
	Scheme = Scheme:dark(DefaultThemeColor.Color).Colors,
}, {
	SetTheme = function(state, action)
		if action.Theme == state.Theme then
			return state
		else
			local scheme = if action.Theme == Theme.Light then Scheme:light(state.Color).Colors else Scheme:dark(state.Color).Colors
			return {
				Theme = action.Theme,
				Color = state.Color,
				Scheme = scheme,
			}
		end
	end,
	SetColor = function(state, action)
		if action.Color == state.Color then
			return state
		else
			local scheme = if state.Theme == Theme.Light then Scheme:light(action.Color).Colors else Scheme:dark(action.Color).Colors
			return {
				Theme = state.Theme,
				Color = action.Color,
				Scheme = scheme,
			}
		end
	end,
})
local ThemeStore = Rodux.Store.new(ThemeReducer)
return {
	SetTheme = SetTheme,
	SetColor = SetColor,
	ThemeReducer = ThemeReducer,
	ThemeStore = ThemeStore,
}
