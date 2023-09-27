-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
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
local Int = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "ColourUtils").Int
local Hct = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "material-color", "hct", "hct").Hct
--[[
	*
	*  A convenience class for retrieving colors that are constant in hue and
	*  chroma, but vary in tone.
]]
local TonalPalette
do
	TonalPalette = setmetatable({}, {
		__tostring = function()
			return "TonalPalette"
		end,
	})
	TonalPalette.__index = TonalPalette
	function TonalPalette.new(...)
		local self = setmetatable({}, TonalPalette)
		return self:constructor(...) or self
	end
	function TonalPalette:constructor(hue, chroma)
		self.hue = hue
		self.chroma = chroma
		self.cache = {}
	end
	function TonalPalette:fromInt(argb)
		local hct = Hct:fromInt(argb)
		return TonalPalette:fromHueAndChroma(hct.internalHue, hct.internalChroma)
	end
	function TonalPalette:fromHueAndChroma(hue, chroma)
		return TonalPalette.new(hue, chroma)
	end
	function TonalPalette:tone(tone)
		local _cache = self.cache
		local _tone = tone
		local argb = _cache[_tone]
		if argb == nil then
			argb = Hct:from(self.hue, self.chroma, tone):toInt()
			local _cache_1 = self.cache
			local _tone_1 = tone
			local _argb = argb
			_cache_1[_tone_1] = _argb
		end
		return Int.fromInt(argb)
	end
end
return {
	TonalPalette = TonalPalette,
}
