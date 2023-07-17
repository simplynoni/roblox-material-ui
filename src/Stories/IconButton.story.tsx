import Roact from '@rbxts/roact';
import IconButton from '../IconButton';
import { Icons } from '../Icons';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 24)}
			/>
			<IconButton
				Size={UDim2.fromOffset(36, 36)}
				Icon={Icons.Palette}
				IconColor={DefaultTheme.Scheme.primary}
				Pressed={() => {}}
				Theme={DefaultTheme}
			/>
			<IconButton
				Size={UDim2.fromOffset(36, 36)}
				Icon={Icons.Palette}
				IconColor={DefaultTheme.Scheme.secondary}
				Pressed={() => {}}
				Theme={DefaultTheme}
			/>
			<IconButton
				Size={UDim2.fromOffset(36, 36)}
				Icon={Icons.Palette}
				IconColor={DefaultTheme.Scheme.tertiary}
				Pressed={() => {}}
				Theme={DefaultTheme}
			/>
		</>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
