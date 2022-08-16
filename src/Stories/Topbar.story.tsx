import Roact from '@rbxts/roact';
import { Icons } from '../Icons';
import MockThemeController from '../Theme/MockTheme';
import Topbar from '../Topbar';
import UIBase from '../UIBase';
import StoryTheme from './StoryTheme';

class StoryComponent extends Roact.Component<{}, { Closed: boolean }> {
	protected state: Readonly<{ Closed: boolean }> = { Closed: false };

	public render(): Roact.Element | undefined {
		return (
			<MockThemeController Theme={StoryTheme}>
				<UIBase
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(0.5, 0.6)}
					Closed={this.state.Closed}
				>
					<Topbar
						Title='Topbar'
						CloseFunction={() => {
							this.setState({ Closed: true });
							task.wait(2);
							this.setState({ Closed: false });
						}}
						LeadingIcon={{ Icon: Icons.NavigateLeft, Function: () => {} }}
					/>
				</UIBase>
			</MockThemeController>
		);
	}
}

export = function (frame: GuiObject) {
	const Tree = Roact.mount(<StoryComponent />, frame);

	return () => {
		Roact.unmount(Tree);
	};
};
