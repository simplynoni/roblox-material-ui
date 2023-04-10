import Roact from '@rbxts/roact';
import IconButton from '../IconButton';
import { Icons } from '../Icons';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const component = (
		<>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 24)}
			/>
			<IconButton
				Theme={DefaultTheme}
				Size={UDim2.fromOffset(36, 36)}
				Icon={Icons.Palette}
				IconColor={DefaultTheme.Scheme.primary}
				Pressed={() => {}}
			/>
			<IconButton
				Theme={DefaultTheme}
				Size={UDim2.fromOffset(36, 36)}
				Icon={Icons.Palette}
				IconColor={DefaultTheme.Scheme.secondary}
				Pressed={() => {}}
			/>
			<IconButton
				Theme={DefaultTheme}
				Size={UDim2.fromOffset(36, 36)}
				Icon={Icons.Palette}
				IconColor={DefaultTheme.Scheme.tertiary}
				Pressed={() => {}}
			/>
		</>
	);

	const tree = Roact.mount(component, frame);

	return () => {
		Roact.unmount(tree);
	};
};
