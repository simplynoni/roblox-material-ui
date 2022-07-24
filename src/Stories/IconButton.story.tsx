import Roact from '@rbxts/roact';
import IconButton from 'IconButton';
import { Px24 } from 'Icons';
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
							<uilistlayout
								VerticalAlignment={Enum.VerticalAlignment.Center}
								HorizontalAlignment={Enum.HorizontalAlignment.Center}
								Padding={new UDim(0, 24)}
							/>
							<IconButton
								Size={UDim2.fromOffset(36, 36)}
								Icon={Px24.Palette}
								IconColor={theme.Colors.primary}
								Pressed={() => {}}
							/>
							<IconButton
								Size={UDim2.fromOffset(36, 36)}
								Icon={Px24.Palette}
								IconColor={theme.Colors.secondary}
								Pressed={() => {}}
							/>
							<IconButton
								Size={UDim2.fromOffset(36, 36)}
								Icon={Px24.Palette}
								IconColor={theme.Colors.tertiary}
								Pressed={() => {}}
							/>
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
