import Roact from '@rbxts/roact';
import SectionTitle from '../SectionTitle';
import UIBase from '../UIBase';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<UIBase
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.5, 0.6)}
			Theme={DefaultTheme}
		>
			<SectionTitle Text='Section Title' MaxTextSize={16} Theme={DefaultTheme} />
		</UIBase>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
