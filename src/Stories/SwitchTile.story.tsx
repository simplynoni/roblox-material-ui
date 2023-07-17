import Roact from '@rbxts/roact';
import { Icons } from '../Icons';
import SwitchTile from '../SwitchTile';
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
			<SwitchTile Title='Switch' Enabled={true} Theme={DefaultTheme} />
			<SwitchTile Title='Switch' Enabled={false} Theme={DefaultTheme} />
			<SwitchTile Title='Switch' Description='Description' Enabled={false} Theme={DefaultTheme} />
			<SwitchTile
				Title='Switch'
				Description='Description'
				Icon={Icons.Palette}
				Enabled={false}
				Theme={DefaultTheme}
			/>
			<SwitchTile Title='Switch' Icon={Icons.Palette} Enabled={false} Theme={DefaultTheme} />
		</UIBase>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
