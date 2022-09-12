import Roact from '@rbxts/roact';
import { ColorScheme } from '../Constants';
import ProgressBar from '../ProgressBar';

class StoryComponent extends Roact.Component<{}, { Value: number }> {
	protected state: Readonly<{ Value: number }> = { Value: 50 };

	render() {
		return (
			<>
				<uilistlayout
					VerticalAlignment={Enum.VerticalAlignment.Center}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 24)}
				/>
				<ProgressBar
					Size={new UDim2(0.5, 0, 0, 20)}
					Value={this.state.Value}
					ColorScheme={ColorScheme.Primary}
					Label='Progress Bar'
					ShowValue
				/>
				<ProgressBar
					Size={new UDim2(0.5, 0, 0, 20)}
					Value={this.state.Value}
					ColorScheme={ColorScheme.Secondary}
					Label='Progress Bar'
					ShowValue
				/>
				<ProgressBar
					Size={new UDim2(0.5, 0, 0, 20)}
					Value={this.state.Value}
					ColorScheme={ColorScheme.Tertiary}
					Label='Progress Bar'
					ShowValue
				/>
				<ProgressBar
					Size={new UDim2(0.5, 0, 0, 20)}
					Value={this.state.Value}
					ColorScheme={ColorScheme.Error}
					Label='Progress Bar'
					ShowValue
				/>
			</>
		);
	}

	protected didMount(): void {
		task.spawn(() => {
			task.wait(3);
			this.setState({ Value: 100 });
			task.wait(3);
			this.setState({ Value: 50 });
			task.wait(3);
			this.setState({ Value: 5 });
		});
	}
}

export = function (frame: GuiObject) {
	const Tree = Roact.mount(<StoryComponent />, frame);

	return () => {
		Roact.unmount(Tree);
	};
};
