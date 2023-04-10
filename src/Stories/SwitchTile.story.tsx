import Roact from '@rbxts/roact';
import { Icons } from '../Icons';
import SwitchTile from '../SwitchTile';
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
			<SwitchTile Theme={DefaultTheme} Title='Switch' Enabled={true} />
			<SwitchTile Theme={DefaultTheme} Title='Switch' Enabled={false} />
			<SwitchTile Theme={DefaultTheme} Title='Switch' Description='Description' Enabled={false} />
			<SwitchTile
				Theme={DefaultTheme}
				Title='Switch'
				Description='Description'
				Icon={Icons.Palette}
				Enabled={false}
			/>
			<SwitchTile Theme={DefaultTheme} Title='Switch' Icon={Icons.Palette} Enabled={false} />
		</UIBase>
	);

	const tree = Roact.mount(component, frame);

	return () => {
		Roact.unmount(tree);
	};
};
