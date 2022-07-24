import Roact from '@rbxts/roact';
import MockThemeController from '../Theme/MockTheme';
import UIBase from '../UIBase';
import StoryTheme from './StoryTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<MockThemeController Theme={StoryTheme}>
			<UIBase
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.5, 0.6)}
			/>
		</MockThemeController>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
