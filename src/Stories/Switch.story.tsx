import Roact from '@rbxts/roact';
import Switch from '../Switch';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 24)}
			/>
			<Switch Enabled={true} />
			<Switch Enabled={false} />
		</>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
