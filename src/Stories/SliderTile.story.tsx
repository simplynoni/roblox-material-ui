import Roact from '@rbxts/roact';
import { Px24 } from 'Icons';
import SliderTile from 'SliderTile';
import MockThemeController from 'Theme/MockTheme';
import UIBase from 'UIBase';
import StoryTheme from './StoryTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<MockThemeController Theme={StoryTheme}>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.1)}
				Size={new UDim2(0.5, 0, 0, 16)}
				BackgroundTransparency={1}
				Text={"doesn't work in hoarcekat ui"}
				Font={Enum.Font.GothamBold}
				TextSize={16}
				TextTransparency={0.5}
				TextColor3={Color3.fromRGB(242, 242, 242)}
			/>
			<UIBase
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.4, 0.6)}
			>
				<uilistlayout
					VerticalAlignment={Enum.VerticalAlignment.Top}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 0)}
				/>
				<SliderTile Title='Slider' Value={1} />
				<SliderTile Title='Stepped Slider' Steps={10} Value={0} ShowValue />
				<SliderTile Title='Slider' Value={1} ShowValue />
				<SliderTile Title='Slider' Icon={Px24.Palette} Value={0} />
			</UIBase>
		</MockThemeController>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
