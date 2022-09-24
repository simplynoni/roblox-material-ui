import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import RoundedFrame from '../RoundedFrame';
import { ThemeState, ThemeStore } from '../Theme/ThemeState';
import { ThemeProps } from '../Types';

class StoryComponent extends Roact.Component<ThemeProps> {
	protected state: Readonly<{ Closed: boolean }> = { Closed: false };

	public render(): Roact.Element | undefined {
		const theme = this.props.Theme;

		return (
			<RoundedFrame
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.5, 0.6)}
				CornerRadius={16}
				Color={theme.Scheme.surfaceVariant}
			/>
		);
	}
}

const Connected = connect<{ Theme: ThemeState }, {}, {}, ThemeState>((state) => {
	return {
		Theme: { ...state },
	};
})(StoryComponent);

class ThemedStoryComponent extends Roact.Component {
	render() {
		return (
			<StoreProvider store={ThemeStore}>
				<Connected {...this.props} />
			</StoreProvider>
		);
	}
}

export = function (frame: GuiObject) {
	const Tree = Roact.mount(<ThemedStoryComponent />, frame);

	return () => {
		Roact.unmount(Tree);
	};
};
