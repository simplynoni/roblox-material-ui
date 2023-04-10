import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import IconButton from '../IconButton';
import { Icons } from '../Icons';
import { ThemeState, ThemeStore } from '../Theme/ThemeState';
import { ThemeProps } from '../Types';

class StoryComponent extends Roact.Component<ThemeProps> {
	protected state: Readonly<{ Closed: boolean }> = { Closed: false };

	public render(): Roact.Element | undefined {
		const theme = this.props.Theme;

		return (
			<>
				<uilistlayout
					VerticalAlignment={Enum.VerticalAlignment.Center}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 24)}
				/>
				<IconButton
					Size={UDim2.fromOffset(36, 36)}
					Icon={Icons.Palette}
					IconColor={theme.Scheme.primary}
					Pressed={() => {}}
				/>
				<IconButton
					Size={UDim2.fromOffset(36, 36)}
					Icon={Icons.Palette}
					IconColor={theme.Scheme.secondary}
					Pressed={() => {}}
				/>
				<IconButton
					Size={UDim2.fromOffset(36, 36)}
					Icon={Icons.Palette}
					IconColor={theme.Scheme.tertiary}
					Pressed={() => {}}
				/>
			</>
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
