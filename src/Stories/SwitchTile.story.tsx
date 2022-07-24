import Roact from '@rbxts/roact';
import { Px24 } from '../Icons';
import SwitchTile from '../SwitchTile';
import MockThemeController from '../Theme/MockTheme';
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
				<SwitchTile Title='Switch' Enabled={true} />
				<SwitchTile Title='Switch' Enabled={false} />
				<SwitchTile Title='Switch' Description='Description' Enabled={false} />
				<SwitchTile Title='Switch' Description='Description' Icon={Px24.Palette} Enabled={false} />
				<SwitchTile Title='Switch' Icon={Px24.Palette} Enabled={false} />
			</UIBase>
		</MockThemeController>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
