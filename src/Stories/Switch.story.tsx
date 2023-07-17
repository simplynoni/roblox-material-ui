import Roact from '@rbxts/roact';
import Switch from '../Switch';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 24)}
			/>
			<Switch Enabled={true} Theme={DefaultTheme} />
			<Switch Enabled={false} Theme={DefaultTheme} />
		</>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
