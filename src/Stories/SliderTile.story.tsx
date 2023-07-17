import Roact from '@rbxts/roact';
import { GothamBlack } from '../Fonts';
import { Icons } from '../Icons';
import SliderTile from '../SliderTile';
import UIBase from '../UIBase';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.1)}
				Size={new UDim2(0.5, 0, 0, 16)}
				BackgroundTransparency={1}
				Text={"doesn't work in hoarcekat ui"}
				FontFace={GothamBlack}
				TextSize={16}
				TextTransparency={0.5}
				TextColor3={Color3.fromRGB(242, 242, 242)}
			/>
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
				<SliderTile Title='Slider' Value={1} Theme={DefaultTheme} />
				<SliderTile Title='Stepped Slider' Steps={10} Value={0} ShowValue Theme={DefaultTheme} />
				<SliderTile Title='Slider' Value={1} ShowValue Theme={DefaultTheme} />
				<SliderTile Title='Slider' Icon={Icons.Palette} Value={0} Theme={DefaultTheme} />
			</UIBase>
		</>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
