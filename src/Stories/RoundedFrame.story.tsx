import Roact from '@rbxts/roact';
import RoundedFrame from '../RoundedFrame';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<RoundedFrame
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.5, 0.6)}
			CornerRadius={16}
			Color={DefaultTheme.Scheme.surfaceVariant}
		/>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
