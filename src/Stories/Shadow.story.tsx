import Roact from '@rbxts/roact';
import RoundedFrame from 'RoundedFrame';
import Shadow from 'Shadow';
import MockThemeController from 'Theme/MockTheme';
import ThemeContext from 'Theme/ThemeContext';
import StoryTheme from './StoryTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<MockThemeController Theme={StoryTheme}>
			<ThemeContext.Consumer
				render={(theme) => {
					return (
						<>
							<uigridlayout
								VerticalAlignment={Enum.VerticalAlignment.Center}
								HorizontalAlignment={Enum.HorizontalAlignment.Center}
								CellSize={UDim2.fromOffset(150, 150)}
								CellPadding={UDim2.fromOffset(24, 24)}
							/>
							<frame BackgroundTransparency={1}>
								<Shadow Elevation={1} />
								<RoundedFrame
									AnchorPoint={new Vector2(0.5, 0.5)}
									Position={UDim2.fromScale(0.5, 0.5)}
									Size={UDim2.fromScale(1, 1)}
									Color={theme.Colors.background}
									CornerRadius={16}
								>
									<textlabel
										AnchorPoint={new Vector2(0.5, 0.5)}
										Position={UDim2.fromScale(0.5, 0.5)}
										Size={UDim2.fromScale(0.5, 0.5)}
										BackgroundTransparency={1}
										Text='Elevation 1'
										Font={Enum.Font.GothamBold}
										TextSize={16}
										TextTransparency={0.5}
										TextColor3={theme.Colors.onBackground}
									/>
								</RoundedFrame>
							</frame>
							<frame BackgroundTransparency={1}>
								<Shadow Elevation={2} />
								<RoundedFrame
									AnchorPoint={new Vector2(0.5, 0.5)}
									Position={UDim2.fromScale(0.5, 0.5)}
									Size={UDim2.fromScale(1, 1)}
									Color={theme.Colors.background}
									CornerRadius={16}
								>
									<textlabel
										AnchorPoint={new Vector2(0.5, 0.5)}
										Position={UDim2.fromScale(0.5, 0.5)}
										Size={UDim2.fromScale(0.5, 0.5)}
										BackgroundTransparency={1}
										Text='Elevation 2'
										Font={Enum.Font.GothamBold}
										TextSize={16}
										TextTransparency={0.5}
										TextColor3={theme.Colors.onBackground}
									/>
								</RoundedFrame>
							</frame>
							<frame BackgroundTransparency={1}>
								<Shadow Elevation={3} />
								<RoundedFrame
									AnchorPoint={new Vector2(0.5, 0.5)}
									Position={UDim2.fromScale(0.5, 0.5)}
									Size={UDim2.fromScale(1, 1)}
									Color={theme.Colors.background}
									CornerRadius={16}
								>
									<textlabel
										AnchorPoint={new Vector2(0.5, 0.5)}
										Position={UDim2.fromScale(0.5, 0.5)}
										Size={UDim2.fromScale(0.5, 0.5)}
										BackgroundTransparency={1}
										Text='Elevation 3'
										Font={Enum.Font.GothamBold}
										TextSize={16}
										TextTransparency={0.5}
										TextColor3={theme.Colors.onBackground}
									/>
								</RoundedFrame>
							</frame>
							<frame BackgroundTransparency={1}>
								<Shadow Elevation={4} />
								<RoundedFrame
									AnchorPoint={new Vector2(0.5, 0.5)}
									Position={UDim2.fromScale(0.5, 0.5)}
									Size={UDim2.fromScale(1, 1)}
									Color={theme.Colors.background}
									CornerRadius={16}
								>
									<textlabel
										AnchorPoint={new Vector2(0.5, 0.5)}
										Position={UDim2.fromScale(0.5, 0.5)}
										Size={UDim2.fromScale(0.5, 0.5)}
										BackgroundTransparency={1}
										Text='Elevation 4'
										Font={Enum.Font.GothamBold}
										TextSize={16}
										TextTransparency={0.5}
										TextColor3={theme.Colors.onBackground}
									/>
								</RoundedFrame>
							</frame>
							<frame BackgroundTransparency={1}>
								<Shadow Elevation={5} />
								<RoundedFrame
									AnchorPoint={new Vector2(0.5, 0.5)}
									Position={UDim2.fromScale(0.5, 0.5)}
									Size={UDim2.fromScale(1, 1)}
									Color={theme.Colors.background}
									CornerRadius={16}
								>
									<textlabel
										AnchorPoint={new Vector2(0.5, 0.5)}
										Position={UDim2.fromScale(0.5, 0.5)}
										Size={UDim2.fromScale(0.5, 0.5)}
										BackgroundTransparency={1}
										Text='Elevation 5'
										Font={Enum.Font.GothamBold}
										TextSize={16}
										TextTransparency={0.5}
										TextColor3={theme.Colors.onBackground}
									/>
								</RoundedFrame>
							</frame>
						</>
					);
				}}
			/>
		</MockThemeController>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
