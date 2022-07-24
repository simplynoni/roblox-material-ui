import Roact from '@rbxts/roact';
import ColorTile from '../ColorTile';
import { Px24 } from '../Icons';
import MockThemeController from '../Theme/MockTheme';
import ThemeContext from '../Theme/ThemeContext';
import UIBase from '../UIBase';
import StoryTheme from './StoryTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<MockThemeController Theme={StoryTheme}>
			<UIBase
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.4, 0.6)}
			>
				<uilistlayout
					VerticalAlignment={Enum.VerticalAlignment.Top}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 0)}
				/>
				<ThemeContext.Consumer
					render={(theme) => {
						return (
							<>
								<ColorTile Title='Color' Color={theme.Colors.primary} />
								<ColorTile Title='Color' Color={theme.Colors.secondary} />
								<ColorTile Title='Color' Description='Description' Color={theme.Colors.tertiary} />
								<ColorTile
									Title='Color'
									Description='Description'
									Icon={Px24.Palette}
									Color={theme.Colors.error}
								/>
								<ColorTile Title='Color' Icon={Px24.Palette} Color={theme.Colors.primaryContainer} />
							</>
						);
					}}
				/>
			</UIBase>
		</MockThemeController>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
