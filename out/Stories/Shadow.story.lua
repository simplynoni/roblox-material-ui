-- Compiled with roblox-ts v2.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Roact = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "RoactTS")
local RoundedFrame = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "RoundedFrame").default
local Shadow = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Shadow").default
local DefaultTheme = TS.import(script, game:GetService("ReplicatedStorage"), "Material-UI", "Stories", "DefaultTheme").default
return function(frame)
	local Tree = Roact.mount(Roact.createFragment({
		Roact.createElement("UIGridLayout", {
			VerticalAlignment = Enum.VerticalAlignment.Center,
			HorizontalAlignment = Enum.HorizontalAlignment.Center,
			CellSize = UDim2.fromOffset(150, 150),
			CellPadding = UDim2.fromOffset(24, 24),
		}),
		Roact.createElement("Frame", {
			BackgroundTransparency = 1,
		}, {
			Roact.createElement(Shadow, {
				Elevation = 1,
			}),
			Roact.createElement(RoundedFrame, {
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(1, 1),
				Color = DefaultTheme.Scheme.background,
				CornerRadius = 16,
			}, {
				Roact.createElement("TextLabel", {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(0.5, 0.5),
					BackgroundTransparency = 1,
					Text = "Elevation 1",
					Font = Enum.Font.GothamBold,
					TextSize = 16,
					TextTransparency = 0.5,
					TextColor3 = DefaultTheme.Scheme.onBackground,
				}),
			}),
		}),
		Roact.createElement("Frame", {
			BackgroundTransparency = 1,
		}, {
			Roact.createElement(Shadow, {
				Elevation = 2,
			}),
			Roact.createElement(RoundedFrame, {
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(1, 1),
				Color = DefaultTheme.Scheme.background,
				CornerRadius = 16,
			}, {
				Roact.createElement("TextLabel", {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(0.5, 0.5),
					BackgroundTransparency = 1,
					Text = "Elevation 2",
					Font = Enum.Font.GothamBold,
					TextSize = 16,
					TextTransparency = 0.5,
					TextColor3 = DefaultTheme.Scheme.onBackground,
				}),
			}),
		}),
		Roact.createElement("Frame", {
			BackgroundTransparency = 1,
		}, {
			Roact.createElement(Shadow, {
				Elevation = 3,
			}),
			Roact.createElement(RoundedFrame, {
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(1, 1),
				Color = DefaultTheme.Scheme.background,
				CornerRadius = 16,
			}, {
				Roact.createElement("TextLabel", {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(0.5, 0.5),
					BackgroundTransparency = 1,
					Text = "Elevation 3",
					Font = Enum.Font.GothamBold,
					TextSize = 16,
					TextTransparency = 0.5,
					TextColor3 = DefaultTheme.Scheme.onBackground,
				}),
			}),
		}),
		Roact.createElement("Frame", {
			BackgroundTransparency = 1,
		}, {
			Roact.createElement(Shadow, {
				Elevation = 4,
			}),
			Roact.createElement(RoundedFrame, {
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(1, 1),
				Color = DefaultTheme.Scheme.background,
				CornerRadius = 16,
			}, {
				Roact.createElement("TextLabel", {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(0.5, 0.5),
					BackgroundTransparency = 1,
					Text = "Elevation 4",
					Font = Enum.Font.GothamBold,
					TextSize = 16,
					TextTransparency = 0.5,
					TextColor3 = DefaultTheme.Scheme.onBackground,
				}),
			}),
		}),
		Roact.createElement("Frame", {
			BackgroundTransparency = 1,
		}, {
			Roact.createElement(Shadow, {
				Elevation = 5,
			}),
			Roact.createElement(RoundedFrame, {
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(1, 1),
				Color = DefaultTheme.Scheme.background,
				CornerRadius = 16,
			}, {
				Roact.createElement("TextLabel", {
					AnchorPoint = Vector2.new(0.5, 0.5),
					Position = UDim2.fromScale(0.5, 0.5),
					Size = UDim2.fromScale(0.5, 0.5),
					BackgroundTransparency = 1,
					Text = "Elevation 5",
					Font = Enum.Font.GothamBold,
					TextSize = 16,
					TextTransparency = 0.5,
					TextColor3 = DefaultTheme.Scheme.onBackground,
				}),
			}),
		}),
	}), frame)
	return function()
		Roact.unmount(Tree)
	end
end
