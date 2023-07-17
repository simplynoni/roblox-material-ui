import Roact from '@rbxts/roact';
import { GothamBlack } from '../Fonts';
import Slider from '../Slider';
import DefaultTheme from './DefaultTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<>
			<uilistlayout
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 24)}
			/>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={new UDim2(0.5, 0, 0, 16)}
				BackgroundTransparency={1}
				Text={"doesn't work in hoarcekat ui"}
				FontFace={GothamBlack}
				TextSize={16}
				TextTransparency={0.5}
				TextColor3={Color3.fromRGB(242, 242, 242)}
			/>
			<Slider Value={1} Steps={10} Size={new UDim2(0.5, 0, 0, 15)} Theme={DefaultTheme} />
			<Slider Value={0} Steps={10} Size={new UDim2(0.5, 0, 0, 15)} Theme={DefaultTheme} />
		</>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
