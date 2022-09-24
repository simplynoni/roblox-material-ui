import Roact from '@rbxts/roact';
import { connect, StoreProvider } from '@rbxts/roact-rodux';
import Icon from '../Icon';
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
				<Icon
					Size={UDim2.fromOffset(24, 24)}
					Icon={Icons.Palette}
					IconSize={'24p'}
					IconColor={theme.Scheme.primary}
				/>
				<Icon
					Size={UDim2.fromOffset(24, 24)}
					Icon={Icons.Palette}
					IconSize={'24p'}
					IconColor={theme.Scheme.secondary}
				/>
				<Icon
					Size={UDim2.fromOffset(24, 24)}
					Icon={Icons.Palette}
					IconSize={'24p'}
					IconColor={theme.Scheme.tertiary}
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
