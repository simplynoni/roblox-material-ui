import Roact from '@rbxts/roact';
import { TonalButton } from '../../Buttons/TonalButton';
import MockThemeController from '../../Theme/MockTheme';
import UIBase from '../../UIBase';
import StoryTheme from '../StoryTheme';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
		<MockThemeController Theme={StoryTheme}>
			<UIBase
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.3, 0.5)}
			>
				<uilistlayout
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 20)}
				/>
				<TonalButton
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					AutomaticSize
					Text='AutomaticSize Button'
					Pressed={() => {
						print('a');
					}}
				/>
				<TonalButton
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={new UDim2(0.75, 0, 0, 35)}
					Text='Custom Size Button'
					Pressed={() => {
						print('a');
					}}
				/>
				<TonalButton
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					AutomaticSize
					Text='Disabled Button'
					Disabled
					Pressed={() => {
						print('a');
					}}
				/>
			</UIBase>
		</MockThemeController>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};