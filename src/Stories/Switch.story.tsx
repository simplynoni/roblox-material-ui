import Roact from '@rbxts/roact';
import Switch from '../Switch';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const component = (
		<>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 24)}
			/>
			<Switch Theme={DefaultTheme} Enabled={true} />
			<Switch Theme={DefaultTheme} Enabled={false} />
		</>
	);

	const tree = Roact.mount(component, frame);

	return () => {
		Roact.unmount(tree);
	};
};
