import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import ColorTile from '../ColorTile';
import { Icons } from '../Icons';
import { ThemeState, ThemeStore } from '../Theme/ThemeState';
import { ThemeProps } from '../Types';
import UIBase from '../UIBase';

class StoryComponent extends Roact.Component<ThemeProps> {
	protected state: Readonly<{ Closed: boolean }> = { Closed: false };

	public render(): Roact.Element | undefined {
		const theme = this.props.Theme;

		return (
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

				<ColorTile Title='Color' Color={theme.Scheme.primary} />
				<ColorTile Title='Color' Color={theme.Scheme.secondary} />
				<ColorTile Title='Color' Description='Description' Color={theme.Scheme.tertiary} />
				<ColorTile Title='Color' Description='Description' Icon={Icons.Palette} Color={theme.Scheme.error} />
				<ColorTile Title='Color' Icon={Icons.Palette} Color={theme.Scheme.primaryContainer} />
			</UIBase>
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
