import Roact from '@rbxts/roact';
import UIBase from '../UIBase';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<UIBase
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.5, 0.6)}
			Theme={DefaultTheme}
		/>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
