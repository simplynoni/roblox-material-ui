-- Compiled with roblox-ts v2.1.1
local function LowerCaseFirstLetter(input)
	return string.lower(string.split(input, "")[1]) .. string.sub(input, 2)
end
return {
	LowerCaseFirstLetter = LowerCaseFirstLetter,
}
