import Roact from '@rbxts/roact';
import Icon from '../Icon';
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
			<Icon
				Size={UDim2.fromOffset(24, 24)}
				Icon={Icons.Palette}
				IconSize={'24p'}
				IconColor={DefaultTheme.Scheme.primary}
			/>
			<Icon
				Size={UDim2.fromOffset(24, 24)}
				Icon={Icons.Palette}
				IconSize={'24p'}
				IconColor={DefaultTheme.Scheme.secondary}
			/>
			<Icon
				Size={UDim2.fromOffset(24, 24)}
				Icon={Icons.Palette}
				IconSize={'24p'}
				IconColor={DefaultTheme.Scheme.tertiary}
			/>
		</>
	);

	const tree = Roact.mount(component, frame);

	return () => {
		Roact.unmount(tree);
	};
};
