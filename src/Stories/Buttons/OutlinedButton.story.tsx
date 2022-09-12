import Roact from '@rbxts/roact';
import { OutlinedButton } from '../../Buttons';
import UIBase from '../../UIBase';

export = function (frame: GuiObject) {
	const Tree = Roact.mount(
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
			<OutlinedButton
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				AutomaticSize
				Text='AutomaticSize Button'
				Pressed={() => {
					print('a');
				}}
			/>
			<OutlinedButton
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={new UDim2(0.75, 0, 0, 35)}
				Text='Custom Size Button'
				Pressed={() => {
					print('a');
				}}
			/>
			<OutlinedButton
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				AutomaticSize
				Text='Disabled Button'
				Disabled
				Pressed={() => {
					print('a');
				}}
			/>
		</UIBase>,
		frame,
	);

	return () => {
		Roact.unmount(Tree);
	};
};
