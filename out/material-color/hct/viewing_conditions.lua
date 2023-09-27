-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
--[[
	*
	* @license
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
local utils = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "material-color", "utils", "color_utils")
local mathUtils = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "material-color", "utils", "math_utils")
--[[
	*
	* In traditional color spaces, a color can be identified solely by the
	* observer's measurement of the color. Color appearance models such as CAM16
	* also use information about the environment where the color was
	* observed, known as the viewing conditions.
	*
	* For example, white under the traditional assumption of a midday sun white
	* point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
	* hue 203, chroma 3, lightness 100)
	*
	* This class caches intermediate values of the CAM16 conversion process that
	* depend only on viewing conditions, enabling speed ups.
]]
local ViewingConditions
do
	ViewingConditions = setmetatable({}, {
		__tostring = function()
			return "ViewingConditions"
		end,
	})
	ViewingConditions.__index = ViewingConditions
	function ViewingConditions.new(...)
		local self = setmetatable({}, ViewingConditions)
		return self:constructor(...) or self
	end
	function ViewingConditions:constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z)
		self.n = n
		self.aw = aw
		self.nbb = nbb
		self.ncb = ncb
		self.c = c
		self.nc = nc
		self.rgbD = rgbD
		self.fl = fl
		self.fLRoot = fLRoot
		self.z = z
	end
	function ViewingConditions:make(whitePoint, adaptingLuminance, backgroundLstar, surround, discountingIlluminant)
		if whitePoint == nil then
			whitePoint = utils.whitePointD65()
		end
		if adaptingLuminance == nil then
			adaptingLuminance = ((200.0 / math.pi) * utils.yFromLstar(50.0)) / 100.0
		end
		if backgroundLstar == nil then
			backgroundLstar = 50.0
		end
		if surround == nil then
			surround = 2.0
		end
		if discountingIlluminant == nil then
			discountingIlluminant = false
		end
		local xyz = whitePoint
		local rW = xyz[1] * 0.401288 + xyz[2] * 0.650173 + xyz[3] * -0.051461
		local gW = xyz[1] * -0.250268 + xyz[2] * 1.204414 + xyz[3] * 0.045854
		local bW = xyz[1] * -0.002079 + xyz[2] * 0.048952 + xyz[3] * 0.953127
		local f = 0.8 + surround / 10.0
		local c = if f >= 0.9 then mathUtils.lerp(0.59, 0.69, (f - 0.9) * 10.0) else mathUtils.lerp(0.525, 0.59, (f - 0.8) * 10.0)
		local d = if discountingIlluminant then 1.0 else f * (1.0 - (1.0 / 3.6) * math.exp((-adaptingLuminance - 42.0) / 92.0))
		d = if d > 1.0 then 1.0 elseif d < 0.0 then 0.0 else d
		local nc = f
		local rgbD = { d * (100.0 / rW) + 1.0 - d, d * (100.0 / gW) + 1.0 - d, d * (100.0 / bW) + 1.0 - d }
		local k = 1.0 / (5.0 * adaptingLuminance + 1.0)
		local k4 = k * k * k * k
		local k4F = 1.0 - k4
		local fl = k4 * adaptingLuminance + 0.1 * k4F * k4F * mathUtils.cbrt(5.0 * adaptingLuminance)
		local n = utils.yFromLstar(backgroundLstar) / whitePoint[2]
		local z = 1.48 + math.sqrt(n)
		local nbb = 0.725 / math.pow(n, 0.2)
		local ncb = nbb
		local rgbAFactors = { math.pow((fl * rgbD[1] * rW) / 100.0, 0.42), math.pow((fl * rgbD[2] * gW) / 100.0, 0.42), math.pow((fl * rgbD[3] * bW) / 100.0, 0.42) }
		local rgbA = { (400.0 * rgbAFactors[1]) / (rgbAFactors[1] + 27.13), (400.0 * rgbAFactors[2]) / (rgbAFactors[2] + 27.13), (400.0 * rgbAFactors[3]) / (rgbAFactors[3] + 27.13) }
		local aw = (2.0 * rgbA[1] + rgbA[2] + 0.05 * rgbA[3]) * nbb
		return ViewingConditions.new(n, aw, nbb, ncb, c, nc, rgbD, fl, math.pow(fl, 0.25), z)
	end
	ViewingConditions.DEFAULT = ViewingConditions:make()
end
return {
	ViewingConditions = ViewingConditions,
}
