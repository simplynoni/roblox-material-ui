import Roact from '@rbxts/roact';
import ColorTile from '../ColorTile';
import { Icons } from '../Icons';
import UIBase from '../UIBase';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<UIBase
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.4, 0.6)}
			Theme={DefaultTheme}
		>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Top}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 0)}
			/>

			<ColorTile Title='Color' Color={DefaultTheme.Scheme.primary} Theme={DefaultTheme} />
			<ColorTile Title='Color' Color={DefaultTheme.Scheme.secondary} Theme={DefaultTheme} />
			<ColorTile
				Title='Color'
				Description='Description'
				Color={DefaultTheme.Scheme.tertiary}
				Theme={DefaultTheme}
			/>
			<ColorTile
				Title='Color'
				Description='Description'
				Icon={Icons.Palette}
				Color={DefaultTheme.Scheme.error}
				Theme={DefaultTheme}
			/>
			<ColorTile
				Title='Color'
				Icon={Icons.Palette}
				Color={DefaultTheme.Scheme.primaryContainer}
				Theme={DefaultTheme}
			/>
		</UIBase>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
