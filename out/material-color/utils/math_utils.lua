-- Compiled with roblox-ts v2.0.4
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
-- This file is automatically generated. Do not modify it.
--[[
	*
	* Utility methods for mathematical operations.
]]
--[[
	*
	* The signum function.
	*
	* @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
]]
local function signum(num)
	if num < 0 then
		return -1
	elseif num == 0 then
		return 0
	else
		return 1
	end
end
--[[
	*
	* The linear interpolation function.
	*
	* @return start if amount = 0 and stop if amount = 1
]]
local function lerp(start, stop, amount)
	return (1.0 - amount) * start + amount * stop
end
--[[
	*
	* Clamps an integer between two integers.
	*
	* @return input when min <= input <= max, and either min or max
	* otherwise.
]]
local function clampInt(min, max, input)
	if input < min then
		return min
	elseif input > max then
		return max
	end
	return input
end
--[[
	*
	* Clamps an integer between two floating-point numbers.
	*
	* @return input when min <= input <= max, and either min or max
	* otherwise.
]]
local function clampDouble(min, max, input)
	if input < min then
		return min
	elseif input > max then
		return max
	end
	return input
end
--[[
	*
	* Sanitizes a degree measure as an integer.
	*
	* @return a degree measure between 0 (inclusive) and 360
	* (exclusive).
]]
local function sanitizeDegreesInt(degrees)
	degrees = degrees % 360
	if degrees < 0 then
		degrees = degrees + 360
	end
	return degrees
end
--[[
	*
	* Sanitizes a degree measure as a floating-point number.
	*
	* @return a degree measure between 0.0 (inclusive) and 360.0
	* (exclusive).
]]
local function sanitizeDegreesDouble(degrees)
	degrees = degrees % 360.0
	if degrees < 0 then
		degrees = degrees + 360.0
	end
	return degrees
end
--[[
	*
	* Sign of direction change needed to travel from one angle to
	* another.
	*
	* For angles that are 180 degrees apart from each other, both
	* directions have the same travel distance, so either direction is
	* shortest. The value 1.0 is returned in this case.
	*
	* @param from The angle travel starts from, in degrees.
	* @param to The angle travel ends at, in degrees.
	* @return -1 if decreasing from leads to the shortest travel
	* distance, 1 if increasing from leads to the shortest travel
	* distance.
]]
local function rotationDirection(from, to)
	local increasingDifference = sanitizeDegreesDouble(to - from)
	return if increasingDifference <= 180.0 then 1.0 else -1.0
end
--[[
	*
	* Distance of two points on a circle, represented using degrees.
]]
local function differenceDegrees(a, b)
	return 180.0 - math.abs(math.abs(a - b) - 180.0)
end
--[[
	*
	* Multiplies a 1x3 row vector with a 3x3 matrix.
]]
local function matrixMultiply(row, matrix)
	local a = row[1] * matrix[1][1] + row[2] * matrix[1][2] + row[3] * matrix[1][3]
	local b = row[1] * matrix[2][1] + row[2] * matrix[2][2] + row[3] * matrix[2][3]
	local c = row[1] * matrix[3][1] + row[2] * matrix[3][2] + row[3] * matrix[3][3]
	return { a, b, c }
end
local function cbrt(x)
	return if x < 0 then -math.pow(-x, 1 / 3) else math.pow(x, 1 / 3)
end
return {
	signum = signum,
	lerp = lerp,
	clampInt = clampInt,
	clampDouble = clampDouble,
	sanitizeDegreesInt = sanitizeDegreesInt,
	sanitizeDegreesDouble = sanitizeDegreesDouble,
	rotationDirection = rotationDirection,
	differenceDegrees = differenceDegrees,
	matrixMultiply = matrixMultiply,
	cbrt = cbrt,
}
