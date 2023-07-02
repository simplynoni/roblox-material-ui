import Roact from '@rbxts/roact';
import ColorTile from '../ColorTile';
import Icons from '../Icons';
import UIBase from '../UIBase';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const component = (
		<UIBase
			Theme={DefaultTheme}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.4, 0.6)}
		>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Top}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 0)}
			/>

			<ColorTile Theme={DefaultTheme} Title='Color' Color={DefaultTheme.Scheme.primary} />
			<ColorTile Theme={DefaultTheme} Title='Color' Color={DefaultTheme.Scheme.secondary} />
			<ColorTile
				Theme={DefaultTheme}
				Title='Color'
				Description='Description'
				Color={DefaultTheme.Scheme.tertiary}
			/>
			<ColorTile
				Theme={DefaultTheme}
				Title='Color'
				Description='Description'
				Icon={Icons.palette}
				Color={DefaultTheme.Scheme.error}
			/>
			<ColorTile
				Theme={DefaultTheme}
				Title='Color'
				Icon={Icons.palette}
				Color={DefaultTheme.Scheme.primaryContainer}
			/>
		</UIBase>
	);

	const tree = Roact.mount(component, frame);

	return () => {
		Roact.unmount(tree);
	};
};
