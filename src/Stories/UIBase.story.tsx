import Roact from '@rbxts/roact';
import { Theme } from '../Constants';
import { SetTheme, ThemeStore } from '../Theme/ThemeState';
import UIBase from '../UIBase';

export = function (frame: GuiObject) {
	ThemeStore.dispatch(SetTheme(Theme.Light));
	const Tree = Roact.mount(
		<UIBase
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.5, 0.6)}
		/>,
		frame,
	);

	task.spawn(() => {
		task.wait(2);
		print('changing theme');
		ThemeStore.dispatch(SetTheme(Theme.Dark));
	});

	return () => {
		Roact.unmount(Tree);
	};
};
