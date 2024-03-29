import Roact from '@rbxts/roact';
import ProgressBar from '../ProgressBar';
import { ColorScheme } from '../types';
import DefaultTheme from './DefaultTheme';

class Component extends Roact.Component<{}, { Value: number }> {
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
					Theme={DefaultTheme}
				/>
				<ProgressBar
					Size={new UDim2(0.5, 0, 0, 20)}
					Value={this.state.Value}
					ColorScheme={ColorScheme.Secondary}
					Label='Progress Bar'
					ShowValue
					Theme={DefaultTheme}
				/>
				<ProgressBar
					Size={new UDim2(0.5, 0, 0, 20)}
					Value={this.state.Value}
					ColorScheme={ColorScheme.Tertiary}
					Label='Progress Bar'
					ShowValue
					Theme={DefaultTheme}
				/>
				<ProgressBar
					Size={new UDim2(0.5, 0, 0, 20)}
					Value={this.state.Value}
					ColorScheme={ColorScheme.Error}
					Label='Progress Bar'
					ShowValue
					Theme={DefaultTheme}
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
	const tree = Roact.mount(<Component />, frame);

	return () => {
		Roact.unmount(tree);
	};
};
