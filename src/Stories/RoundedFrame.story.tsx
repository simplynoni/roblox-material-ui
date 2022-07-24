import Roact from '@rbxts/roact';
import RoundedFrame from 'RoundedFrame';
import MockThemeController from 'Theme/MockTheme';
import ThemeContext from 'Theme/ThemeContext';
import StoryTheme from './StoryTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<MockThemeController Theme={StoryTheme}>
			<ThemeContext.Consumer
				render={(theme) => {
					return (
						<RoundedFrame
							AnchorPoint={new Vector2(0.5, 0.5)}
							Position={UDim2.fromScale(0.5, 0.5)}
							Size={UDim2.fromScale(0.5, 0.6)}
							CornerRadius={16}
							Color={theme.Colors.surfaceVariant}
						/>
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
