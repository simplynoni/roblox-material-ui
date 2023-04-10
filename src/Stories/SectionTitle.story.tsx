import Roact from '@rbxts/roact';
import SectionTitle from '../SectionTitle';
import UIBase from '../UIBase';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<UIBase
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.5, 0.6)}
		>
			<SectionTitle Text='Section Title' MaxTextSize={16} />
		</UIBase>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
