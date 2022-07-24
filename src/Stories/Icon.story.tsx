import Roact from '@rbxts/roact';
import Icon from '../Icon';
import { Px24 } from '../Icons';
import MockThemeController from '../Theme/MockTheme';
import ThemeContext from '../Theme/ThemeContext';
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
							<Icon
								Size={UDim2.fromOffset(24, 24)}
								Icon={Px24.Palette}
								IconSize={'24p'}
								IconColor={theme.Colors.primary}
							/>
							<Icon
								Size={UDim2.fromOffset(24, 24)}
								Icon={Px24.Palette}
								IconSize={'24p'}
								IconColor={theme.Colors.secondary}
							/>
							<Icon
								Size={UDim2.fromOffset(24, 24)}
								Icon={Px24.Palette}
								IconSize={'24p'}
								IconColor={theme.Colors.tertiary}
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
