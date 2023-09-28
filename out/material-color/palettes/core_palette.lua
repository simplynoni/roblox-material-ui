-- Compiled with roblox-ts v2.1.1
local TS = _G[script]
--[[
	*
	* Copyright 2021 Google LLC
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*      http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
]]
local Int = TS.import(script, TS.getModule(script, "@rbxts", "ColourUtils")).Int
local Hct = TS.import(script, script.Parent.Parent, "hct", "hct").Hct
local TonalPalette = TS.import(script, script.Parent, "tonal_palette").TonalPalette
--[[
	*
	* An intermediate concept between the key color for a UI theme, and a full
	* color scheme. 5 sets of tones are generated, all except one use the same hue
	* as the key color, and all vary in chroma.
]]
local CorePalette
do
	CorePalette = setmetatable({}, {
		__tostring = function()
			return "CorePalette"
		end,
	})
	CorePalette.__index = CorePalette
	function CorePalette.new(...)
		local self = setmetatable({}, CorePalette)
		return self:constructor(...) or self
	end
	function CorePalette:constructor(argb)
		local hct = Hct:fromInt(argb)
		local hue = hct:getHue()
		self.a1 = TonalPalette:fromHueAndChroma(hue, math.max(48, hct:getChroma()))
		self.a2 = TonalPalette:fromHueAndChroma(hue, 16)
		self.a3 = TonalPalette:fromHueAndChroma(hue + 60, 24)
		self.n1 = TonalPalette:fromHueAndChroma(hue, 4)
		self.n2 = TonalPalette:fromHueAndChroma(hue, 8)
		self.error = TonalPalette:fromHueAndChroma(25, 84)
	end
	function CorePalette:of(color3)
		return CorePalette.new(Int.toInt(color3))
	end
end
return {
	CorePalette = CorePalette,
}
